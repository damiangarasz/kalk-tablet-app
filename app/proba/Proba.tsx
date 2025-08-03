import { Text, View } from "react-native";

export default function Proba({ wpisanyWynik }: { wpisanyWynik: number }) {
  console.log("tenlog: ", wpisanyWynik);
  return (
    <View className="h-1/3">
      <Text>{wpisanyWynik}</Text>
    </View>
  );
}
