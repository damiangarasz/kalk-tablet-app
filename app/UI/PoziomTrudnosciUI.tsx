import { StackNavigationProp } from "@react-navigation/stack";
import { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";
import { RootStackParamList } from "./UI/RootTS";

export default function PoziomTrudnosci({
  setPoziom,
  navigation,
}: {
  setPoziom: Dispatch<SetStateAction<string>>;
  navigation: StackNavigationProp<RootStackParamList, "Menu">;
}) {
  const menuText = "text-center text-7xl font-bold text-green-300";
  const button =
    "m-auto w-3/4 border-solid border-blue-600 rounded-xl bg-blue-500 border-2";

  function press(pressed: string) {
    setPoziom(pressed);
    navigation.replace("App");
  }

  return (
    <View className="mt-10 m-auto gap-5 w-[450] h-[400] border-solid border-blue-300 rounded-xl bg-blue-200 border-2">
      <Pressable className={button} onPress={() => press("easy")}>
        <Text selectable={false} className={menuText}>
          Easy
        </Text>
      </Pressable>

      <Pressable className={button} onPress={() => press("medium")}>
        <Text selectable={false} className={menuText}>
          Medium
        </Text>
      </Pressable>
      <Pressable className={button} onPress={() => press("ahrd")}>
        <Text selectable={false} className={menuText}>
          Hard
        </Text>
      </Pressable>
    </View>
  );
}
