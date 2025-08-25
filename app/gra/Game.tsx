import { useState } from "react";
import { View } from "react-native";
import Klawiatura from "../UI/Klawiatura";
import EkranZzadaniem from "./EkranZzadaniem";
import TablicaWynikow from "./TablicaWynikw";

export default function Game(props: { poziom: string }) {
  const [wpisanyWynik, setWpisanyWynik] = useState(0);

  const { poziom } = props;

  //ustawia pięć zadań do wykonania

  return (
    <View className="h-screen">
      const l
      <View className="h-[300]">
        <EkranZzadaniem poziom={poziom} />
      </View>
      <View className="h-[100]">
        <TablicaWynikow />
      </View>
      <Klawiatura
        setWpisanyWynik={setWpisanyWynik}
        wpisanyWynik={wpisanyWynik}
      />
    </View>
  );
}
