import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Ekran from "./EkranZzadaniem";
import Picker from "./Picker";
import Shuffle from "./Shuffle";

export default function Zadanie(wynik: number) {
  type typLoL = {
    czyChce: boolean;
    dzialanie: string;
    wynik: number;
  };

  const [sucess, setSucess] = useState<number>(0);
  const [shuffle, setShuffle] = useState<string>("");

  const [poprawna, setPoprawna] = useState("?");
  const [wpisanyWynik, setWpisanyWynik] = useState(0);
  const [zadaneMnozenie, setZadaneMnozenie] = useState<(string | number)[]>();
  const [tabliczkaMnożenia, setTabliczkaMnożenia] = useState<
    readonly [typLoL[], string]
  >([[], ""]);

  //ustawianie tabliczki mnożenia
  useEffect(() => {
    const wynik = Shuffle();
    setTabliczkaMnożenia(wynik);
  }, []);

  //losowanie działania
  useEffect(() => {
    Picker(tabliczkaMnożenia, setPoprawna, setWpisanyWynik, setZadaneMnozenie);
  }, [tabliczkaMnożenia]);

  useEffect(() => {
    console.log("tutaj:", zadaneMnozenie);
  }, [zadaneMnozenie]);

  return (
    <View className="bg-blue-300 w-auto h-[33%]">
      <Ekran
        zadaneMnozenie={zadaneMnozenie?.[0]}
        wynik={wynik}
        setSucess={setSucess}
        setPoprawna={setPoprawna}
        setShuffle={setShuffle}
      />
      <Text>{poprawna}</Text>
    </View>
  );
}
