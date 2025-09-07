import { useState } from "react";
import { View } from "react-native";
import Klawiatura from "../UI/Klawiatura.tsx";
import EkranZzadaniem from "./EkranZzadaniem.tsx";
import TablicaWynikow from "./TablicaWynikw.tsx";

export default function Game(props: { poziom: string }) {
  const [wpisanyWynik, setWpisanyWynik] = useState(0);

  const { poziom } = props;

  const [aktualneZadanie, setAktualneZadanie] = useState("?");
  const [prawidlwoaOdpowiedz, setPrawidlowaOdpowiedz] = useState<number | null>(
    null
  );
  const [counterPositive, setCounterPositive] = useState(0);
  const [counterNegative, setCounterNegative] = useState(0);

  return (
    <View className="h-screen">
      <View className="h-[150]">
        <EkranZzadaniem
          poziom={poziom}
          aktualneZadanie={aktualneZadanie}
          setAktualneZadanie={setAktualneZadanie}
          prawidlwoaOdpowiedz={prawidlwoaOdpowiedz}
          setPrawidlowaOdpowiedz={setPrawidlowaOdpowiedz}
          wpisanyWynik={wpisanyWynik}
          setWpisanyWynik={setWpisanyWynik}
          setCounterPositive={setCounterPositive}
          setCounterNegative={setCounterNegative}
        />
      </View>
      <View className="h-[65]">
        <TablicaWynikow
          counterPositive={counterPositive}
          counterNegative={counterNegative}
          setCounterPositive={setCounterPositive}
          setCounterNegative={setCounterNegative}
          poziom={poziom}
        />
      </View>
      <Klawiatura
        setWpisanyWynik={setWpisanyWynik}
        wpisanyWynik={wpisanyWynik}
        prawidlwoaOdpowiedz={prawidlwoaOdpowiedz}
      />
    </View>
  );
}
