import { ImageBackground, Text, View } from "react-native";
interface LaderboardsProps {
  laderBoard: { wynik: number; imie: string }[];
}
export default function Laderboards({ laderBoard }: LaderboardsProps) {
  return (
    <ImageBackground
      className="flex-auto h-[100%]"
      source={require("../src/bg/bg.png")}
    >
      <View className="h-[600] flex gap-4 pt-6">
        {laderBoard.map((x) => {
          if (x == undefined) {
            console.log(laderBoard);
          }
          return (
            <View className="flex flex-row mx-auto gap-3 w-[75%] bg-orange-500/50 h-[30] items-center">
              <Text>{x.wynik}</Text>
              <Text>{x.imie}</Text>
            </View>
          );
        })}
      </View>
    </ImageBackground>
  );
}
