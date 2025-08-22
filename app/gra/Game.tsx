import { useEffect, useState } from "react";
import { View } from "react-native";
import Shuffle from "../silnik/Shuffle";
import Klawiatura from "../UI/Klawiatura";
import EkranZzadaniem from "./EkranZzadaniem";
import TablicaWynikow from "./TablicaWynikw";

export default function Game() {
  const [wpisanyWynik, setWpisanyWynik] = useState(0);

  useEffect(() => {
    console.log(wpisanyWynik);
    console.log(Shuffle());
  }, [wpisanyWynik]);

  return (
    <View className="h-screen">
      <View className="h-[300]">
        <EkranZzadaniem />
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
