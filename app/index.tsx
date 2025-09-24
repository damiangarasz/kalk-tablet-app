import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import Game from "./gra/Game";
import { RootStackParamList } from "./RootTS";
import PoziomTrudnosciUI from "./UI/PoziomTrudnosciUI";

export default function Index() {
  type MenuScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Menu"
  >;

  const [poziom, setPoziom] = useState<string>("medium");

  useEffect(() => {
    console.log(poziom);
  }, [poziom]);

  const Stack = createStackNavigator();

  const App = () => (
    <SafeAreaView>
      <Game poziom={poziom} tryb="normal" />
    </SafeAreaView>
  );

  const Challenge = () => (
    <SafeAreaView>
      <Game poziom={poziom} tryb="challenge" />
    </SafeAreaView>
  );

  const Menu = () => {
    const navigation = useNavigation<MenuScreenNavigationProp>();

    const menuText = "text-center text-7xl font-bold text-[#f4511e]";
    const stylePrassable = "border border-[#8e6f6fff]";
    return (
      <ImageBackground source={require("./src/bg/bg.png")}>
        <View className="w-[75%] m-auto text-center gap-10">
          <Pressable
            className={stylePrassable}
            onPress={() => navigation.navigate("App")}
          >
            <Text selectable={false} className={menuText}>
              Exercise
            </Text>
          </Pressable>
          <Pressable
            className={stylePrassable}
            onPress={() =>
              navigation.navigate("PoziomTrudnosci", { setPoziom })
            }
          >
            <Text selectable={false} className={menuText}>
              Level
            </Text>
          </Pressable>
          <Pressable
            className={stylePrassable}
            onPress={() => navigation.navigate("Challenge")}
          >
            <Text selectable={false} className={menuText}>
              Challenges
            </Text>
          </Pressable>
          <Pressable
            className={stylePrassable}
            onPress={() =>
              navigation.navigate("PoziomTrudnosci", { setPoziom })
            }
          >
            <Text selectable={false} className={menuText}>
              Laderboards <span className="text-3xl text-white">(soon)</span>
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{}} initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="App"
          component={App}
          options={{
            title: "App",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PoziomTrudnosci"
          options={{
            title: "Poziom Trudnosci",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {(props) => (
            <SafeAreaView>
              <PoziomTrudnosciUI
                setPoziom={setPoziom}
                navigation={props.navigation}
              />
            </SafeAreaView>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Challenge"
          component={Challenge}
          options={{
            title: "Challenge",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
