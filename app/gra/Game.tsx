import { useState } from "react";
import { View } from "react-native";
import Klawiatura from "../UI/Klawiatura.tsx";
import Challenge from "./Challenge.tsx";
import EkranZzadaniem from "./EkranZzadaniem.tsx";
import TablicaWynikow from "./TablicaWynikw.tsx";

export default function Game(props: { poziom: string; tryb: string }) {
  const [wpisanyWynik, setWpisanyWynik] = useState(0);

  const { poziom, tryb } = props;

  const [aktualneZadanie, setAktualneZadanie] = useState("?");
  const [prawidlwoaOdpowiedz, setPrawidlowaOdpowiedz] = useState<number | null>(
    null
  );
  const [counterPositive, setCounterPositive] = useState(0);
  const [counterNegative, setCounterNegative] = useState(0);

  const [licznikPoprawnychChallenge, setLicznikPoprawnychChallenge] =
    useState(0);
  const [challengeEnd, setChallengeEnd] = useState(false);

  const lol = () => {
    if (tryb == "normal") {
      return (
        <View className="h-[65]">
          <TablicaWynikow
            counterPositive={counterPositive}
            counterNegative={counterNegative}
            setCounterPositive={setCounterPositive}
            setCounterNegative={setCounterNegative}
            poziom={poziom}
          />
        </View>
      );
    } else if (tryb == "challenge") {
      return (
        <View className="h-[65]">
          <Challenge
            licznikPoprawnychChallenge={licznikPoprawnychChallenge}
            challengeEnd={challengeEnd}
          />
        </View>
      );
    }
  };

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
          tryb={tryb}
          setLicznikPoprawnychChallenge={setLicznikPoprawnychChallenge}
          setChallengeEnd={setChallengeEnd}
        />
      </View>
      {lol()}
      <Klawiatura
        setWpisanyWynik={setWpisanyWynik}
        wpisanyWynik={wpisanyWynik}
        prawidlwoaOdpowiedz={prawidlwoaOdpowiedz}
        challengeEnd={challengeEnd}
      />
    </View>
  );
}
