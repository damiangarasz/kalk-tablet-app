import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Ekran from "./EkranZzadaniem";
import Licznik from "./Licznik";
import Poprawna from "./Poprawna";
import Shuffle from "./Shuffle";

export default function Zadanie() {
  type typLoL = {
    czyChce: boolean;
    dzialanie: string;
    wynik: number;
  };
  const [tabliczka, setTabliczka] = useState<typLoL[]>([]);

  useEffect(() => {
    console.log("lol");
    Shuffle(setTabliczka);
  }, []);

  useEffect(() => {}, [tabliczka]);

  return (
    <View className="bg-blue-300 w-auto h-[33%]">
      <Text>DUPA</Text>
      <Ekran />
      <Poprawna />
      <Licznik />
    </View>
  );
}
