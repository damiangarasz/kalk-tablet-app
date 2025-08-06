import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import { PoziomTrudnosciScreenProps, RootStackParamList } from "./RootTS";
import PoziomTrudnosciUI from "./UI/PoziomTrudnosciUI";

export default function Index() {
  type MenuScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Menu"
  >;

  const [poziom, setPoziom] = useState<string>("medium");

  const Stack = createStackNavigator();

  const App = () => (
    <SafeAreaView>
      <View className="h-screen"></View>
    </SafeAreaView>
  );

  const Menu = () => {
    const navigation = useNavigation<MenuScreenNavigationProp>();
    return (
      <>
        <Text>Menu</Text>
        <Pressable onPress={() => navigation.navigate("PoziomTrudnosci")}>
          <Text>Difficulty Level</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("App")}>
          <Text>App</Text>
        </Pressable>
      </>
    );
  };

  const PoziomTrudnosci = (props: PoziomTrudnosciScreenProps) => (
    <SafeAreaView>
      <PoziomTrudnosciUI
        {...props}
        setPoziom={setPoziom}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="PoziomTrudnosci" component={PoziomTrudnosci} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
