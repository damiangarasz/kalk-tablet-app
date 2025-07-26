import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Ekran from "./EkranZzadaniem.tsx";
import Picker from "./Picker.tsx";
import Shuffle from "./Shuffle.tsx";

export default function Zadanie({
  setWpisanyWynik,
  wpisanyWynik,
}: {
  setWpisanyWynik: React.Dispatch<React.SetStateAction<number>>;
  wpisanyWynik: number;
}) {
  type typLoL = {
    czyChce: boolean;
    dzialanie: string;
    wynik: number;
  };

  const [sucess, setSucess] = useState<number>(0);
  const [shuffle, setShuffle] = useState<string>("");

  const [poprawna, setPoprawna] = useState("?");

  const [zadaneMnozenie, setZadaneMnozenie] = useState<[string, number]>([
    "",
    0,
  ]);
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

  return (
    <View className="bg-blue-300 w-auto h-1/3">
      <Ekran
        zadaneMnozenie={zadaneMnozenie?.[0]}
        wynikMnozenia={zadaneMnozenie?.[1]}
        wpisanyWynik={wpisanyWynik}
        setSucess={setSucess}
        setPoprawna={setPoprawna}
        setShuffle={setShuffle}
      />
      <Text>{poprawna}</Text>
    </View>
  );
}
