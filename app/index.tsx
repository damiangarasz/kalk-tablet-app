import AsyncStorage from "@react-native-async-storage/async-storage";
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
import Laderboards from "./gra/Laderboards.tsx";
import { RootStackParamList } from "./RootTS";
import PoziomTrudnosciUI from "./UI/PoziomTrudnosciUI";
import SignUpLogIn from "./UI/SignUpLogIn.tsx";

export default function Index() {
  type MenuScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Menu"
  >;

  const [poziom, setPoziom] = useState<string>("medium");
  const [laderBoard, setLaderboard] = useState<
    { wynik: number; imie: string }[]
  >([]);

  useEffect(() => {
    //odczytanie z pamięci laderboardu
    async function wczytaj(id: string) {
      try {
        const res = await AsyncStorage.getItem(id);
        if (res) {
          const { laderBoard } = JSON.parse(res);
          if (Array.isArray(laderBoard)) {
            setLaderboard(laderBoard);
          }
        }
      } catch (e) {
        console.log("Błąd przy odczycie:", e);
        return;
      }
    }
    wczytaj("laderboard");
    console.log(laderBoard);
  }, []);

  useEffect(() => {
    // zapisanie w pamięci laderboardu
    const json = { laderBoard };
    async function zapisz(id: string, value: string) {
      try {
        await AsyncStorage.setItem(id, value);
      } catch {
        console.log("dupa");
      }
    }

    zapisz("laderboard", JSON.stringify(json));
  }, [laderBoard]);

  useEffect(() => {
    console.log(poziom);
  }, [poziom]);

  const Stack = createStackNavigator();

  const App = () => (
    <SafeAreaView>
      <Game poziom={poziom} tryb="normal" setLaderboard={setLaderboard} />
    </SafeAreaView>
  );

  const Challenge = () => (
    <SafeAreaView>
      <Game poziom={poziom} tryb="challenge" setLaderboard={setLaderboard} />
    </SafeAreaView>
  );

  const Lb = () => (
    <SafeAreaView>
      <Laderboards laderBoard={laderBoard} />
    </SafeAreaView>
  );

  const SignUp = () => (
    <SafeAreaView>
      <SignUpLogIn />
    </SafeAreaView>
  );

  const Menu = () => {
    const navigation = useNavigation<MenuScreenNavigationProp>();

    const menuText = "h-auto text-5xl font-bold text-[#f4511e]";
    const stylePrassable =
      "w-[100%] h-[75] border border-[#8e6f6fff] items-center text-center justify-center";
    return (
      <ImageBackground
        className="flex-auto"
        source={require("./src/bg/bg.png")}
      >
        <View className="w-[75%] h-[100%] m-auto gap-10 justify-center">
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
              Difficulty Level
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
            onPress={() => navigation.navigate("Laderboards")}
          >
            <Text selectable={false} className={menuText}>
              Laderboards
            </Text>
          </Pressable>

          <Pressable
            className={stylePrassable}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text selectable={false} className={menuText}>
              SignUp
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
        <Stack.Screen
          name="Laderboards"
          component={Lb}
          options={{
            title: "Laderboards",
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
          name="SignUp"
          component={SignUp}
          options={{
            title: "SignUp",
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
