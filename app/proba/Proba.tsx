import { Text, View } from "react-native";

export default function Proba({ wynik }: { wynik: number }) {
  return (
    <View className="h-1/3">
      <Text>{wynik}</Text>
    </View>
  );
}
