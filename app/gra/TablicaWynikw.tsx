import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { typTablicaWynikowProps } from "../types";

export default function TablicaWynikow({
  counterPositive,
  counterNegative,
  setCounterNegative,
  setCounterPositive,
  poziom,
}: typTablicaWynikowProps) {
  const [procent, setProcent] = useState(0);
  useEffect(() => {
    //wczytywanie wartosci z pamieci jeżeli istnieje
    async function wczytaj(id: string) {
      try {
        await AsyncStorage.getItem(id).then((res) => {
          if (res) {
            const { negative, positive } = JSON.parse(res);
            setCounterNegative(Number(negative));
            setCounterPositive(Number(positive));
          }
        });
      } catch (e) {
        console.log("Błąd przy odczycie:", e);
        return;
      }
    }

    wczytaj("procent");
  }, []);

  //permamentne zapisywanie na urządzeniu
  useEffect(() => {
    const sum = counterPositive + counterNegative;
    setProcent(() => Math.floor((counterPositive / sum) * 100));
  }, [counterNegative, counterPositive]);

  useEffect(() => {
    async function zapisz(id: string, value: string) {
      try {
        await AsyncStorage.setItem(id, value);
      } catch (e) {
        console.log("Błąd przy zapisie:", e);
      }
    }

    const json = { positive: counterPositive, negative: counterNegative };

    zapisz("procent", JSON.stringify(json));
  }, [procent]);
  return (
    <View className="bg-slate-700 h-screen">
      <View className="w-100 mx-auto flex flex-row">
        <Text className=" m-auto text-4xl text-center text-white pt-5">
          {procent}%
        </Text>
        <Text className=" m-auto text-4xl text-center text-white pt-5">
          Level: {poziom}
        </Text>
      </View>
    </View>
  );
}
