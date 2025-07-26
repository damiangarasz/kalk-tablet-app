import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Ekran from "./EkranZzadaniem";
import Picker from "./Picker";
import Shuffle from "./Shuffle";

export default function Zadanie({
  setWpisanyWynik,
  wpisanyWynik,
}: {
  setWpisanyWynik: React.Dispatch<React.SetStateAction<number>>;
  wpisanyWynik: number;
}) {
  console.log("setWpisanyWynik type:", typeof setWpisanyWynik);
  type typLoL = {
    czyChce: boolean;
    dzialanie: string;
    wynik: number;
  };

  const [sucess, setSucess] = useState<number>(0);
  const [shuffle, setShuffle] = useState<string>("");

  const [poprawna, setPoprawna] = useState("?");

  const [zadaneMnozenie, setZadaneMnozenie] = useState<(string | number)[]>();
  const [tabliczkaMnożenia, setTabliczkaMnożenia] = useState<
    readonly [typLoL[], string]
  >([[], ""]);

  //ustawianie tabliczki mnożenia
  useEffect(() => {
    const wynik = Shuffle();
    setTabliczkaMnożenia(wynik);
  }, []);

  //losowanie działania i resetowanie stanu
  useEffect(() => {
    Picker(tabliczkaMnożenia, setPoprawna, setWpisanyWynik, setZadaneMnozenie);
  }, [tabliczkaMnożenia]);

  useEffect(() => {
    console.log("tutaj:", zadaneMnozenie);
  }, [zadaneMnozenie]);

  return (
    <View className="bg-blue-300 w-auto h-1/3">
      <Ekran
        zadaneMnozenie={zadaneMnozenie?.[0]}
        wynik={wpisanyWynik}
        setSucess={setSucess}
        setPoprawna={setPoprawna}
        setShuffle={setShuffle}
      />
      <Text>{poprawna}</Text>
    </View>
  );
}
