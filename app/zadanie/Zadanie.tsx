import { View } from "react-native";
import Ekran from "./EkranZzadaniem";
import Licznik from "./Licznik";
import Poprawna from "./Poprawna";

export default function Zadanie() {
  return (
    <View className="bg-blue-300 w-auto h-[33%]">
      <Ekran />
      <Poprawna />
      <Licznik />
    </View>
  );
}
