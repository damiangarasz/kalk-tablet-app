import { StackNavigationProp } from "@react-navigation/stack";
import { Dispatch, SetStateAction } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../RootTS";

export default function PoziomTrudnosci({
  setPoziom,
  navigation,
}: {
  setPoziom: Dispatch<SetStateAction<string>>;
  navigation: StackNavigationProp<RootStackParamList, "PoziomTrudnosci">;
}) {
  const menuText = "text-center text-6xl font-bold text-yellow-400]";
  const button =
    "m-auto w-3/4 border-solid border-blue-500 rounded-xl bg-[rgba(222,222,222,0.2)] shadow-xl";
  const textStyleButton = { color: "rgba(210, 210, 111, 1)" };

  function press(pressed: string) {
    setPoziom(pressed);
    navigation.replace("App");
  }

  return (
    <ImageBackground
      className="flex-auto h-[100%] "
      source={require("../src/bg/bg.png")}
    >
      <View className=" m-auto gap-5 w-[75%] h-[700] ">
        <Pressable className={button} onPress={() => press("easy")}>
          <Text selectable={false} className={menuText} style={textStyleButton}>
            Easy
          </Text>
        </Pressable>

        <Pressable className={button} onPress={() => press("medium")}>
          <Text selectable={false} className={menuText} style={textStyleButton}>
            Medium
          </Text>
        </Pressable>
        <Pressable className={button} onPress={() => press("hard")}>
          <Text selectable={false} className={menuText} style={textStyleButton}>
            Hard
          </Text>
        </Pressable>
        <Pressable className={button} onPress={() => press("hard")}>
          <Text selectable={false} className={menuText} style={textStyleButton}>
            Adaptive (soon)
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
