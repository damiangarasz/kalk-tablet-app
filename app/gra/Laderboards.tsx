import { ImageBackground, Text, View } from "react-native";

export default function Laderboards() {
  return (
    <ImageBackground className="flex-auto" source={require("../src/bg/bg.png")}>
      <View className="h-[600]">
        <Text>dupa</Text>
      </View>
    </ImageBackground>
  );
}
