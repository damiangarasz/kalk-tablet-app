import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import Klawiatura from "./proba/Klawiatura";
import Proba from "./proba/Proba.tsx";
import Zadanie from "./zadanie/Zadanie.tsx";

export default function Index() {
  const [wynik, setWynik] = useState<number>(0);
  const [wpisanyWynik, setWpisanyWynik] = useState<number>(0);

  type RootStackParamList = {
    Menu: undefined;
    App: undefined;
  };

  type MenuScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Menu"
  >;

  const Stack = createStackNavigator();

  const App = () => (
    <SafeAreaView>
      <View className="h-screen">
        <Zadanie
          wpisanyWynik={wpisanyWynik}
          setWpisanyWynik={setWpisanyWynik}
        />
        <Proba wpisanyWynik={wpisanyWynik} />
        <Klawiatura setWpisanyWynik={setWpisanyWynik} />
      </View>
    </SafeAreaView>
  );

  const Menu = () => {
    const navigation = useNavigation<MenuScreenNavigationProp>();

    return (
      <>
        <Text>Menu</Text>
        <Pressable onPress={() => navigation.navigate("App")}>
          <Text>App</Text>
        </Pressable>
      </>
    );
  };

  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
