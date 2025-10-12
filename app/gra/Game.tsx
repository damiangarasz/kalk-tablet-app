import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Klawiatura from "../UI/Klawiatura.tsx";
import Challenge from "./Challenge.tsx";
import EkranZzadaniem from "./EkranZzadaniem.tsx";
import TablicaWynikow from "./TablicaWynikw.tsx";

export default function Game(props: {
  poziom: string;
  tryb: string;
  setLaderboard: React.Dispatch<
    React.SetStateAction<{ wynik: number; imie: string }[]>
  >;
}) {
  const { poziom, tryb, setLaderboard } = props;

  const [wpisanyWynik, setWpisanyWynik] = useState(0);
  const [poprawna, setPoprawna] = useState("?");
  const [noweZadanieSwitch, setNoweZadanieSwitch] = useState(true);

  const [aktualneZadanie, setAktualneZadanie] = useState("?");
  const [prawidlwoaOdpowiedz, setPrawidlowaOdpowiedz] = useState<number | null>(
    null
  );
  const [counterPositive, setCounterPositive] = useState(0);
  const [counterNegative, setCounterNegative] = useState(0);

  const [licznikPoprawnychChallenge, setLicznikPoprawnychChallenge] =
    useState(0);
  const [challengeEnd, setChallengeEnd] = useState(false);
  const [ekranZapisuLB, setEkranZapisuLB] = useState(false);

  const [imie, setImie] = useState("");

  const Odrzuc = () => {
    setEkranZapisuLB(false);
  };

  const Zapisz = () => {
    setLaderboard((last) => {
      const lb = last;
      const newPush = { wynik: licznikPoprawnychChallenge, imie: imie };

      lb.push(newPush);

      lb.sort((a, b) => b.wynik - a.wynik);
      if (lb.length > 10) {
        lb.pop();
      }
      console.log(lb);
      return lb;
    });
    setEkranZapisuLB(false);
  };

  const zapisLaderboardu = () => {
    return (
      <View className="shadow absolute w-[75%] h-[250] bg-lime-100 z-10 top-10 left-[12.5%]">
        <Text className="text-center pt-5">{licznikPoprawnychChallenge}</Text>
        <Text className="text-center pt-5">Zapisz swój wynik!</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            height: 40,
            width: 180,
            marginHorizontal: "auto",
          }}
          placeholder="np. Marian"
          onChangeText={setImie}
        />
        <View className="flex flex-row justify-evenly p-10">
          <Pressable
            onPress={Zapisz}
            className="bg-blue-300 h-[35] w-[75] justify-center"
          >
            <Text className="text-center">Zapisz</Text>
          </Pressable>
          <Pressable
            onPress={Odrzuc}
            className="bg-blue-300 h-[35] w-[75] justify-center"
          >
            <Text className="text-center">Odrzuć</Text>
          </Pressable>
        </View>
      </View>
    );
  };

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
            setChallengeEnd={setChallengeEnd}
            setPoprawna={setPoprawna}
            setNoweZadanieSwitch={setNoweZadanieSwitch}
            setLicznikPoprawnychChallenge={setLicznikPoprawnychChallenge}
            setEkranZapisuLB={setEkranZapisuLB}
          />
        </View>
      );
    }
  };

  return (
    <View className="h-screen w-screen">
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
          setPoprawna={setPoprawna}
          poprawna={poprawna}
          setNoweZadanieSwitch={setNoweZadanieSwitch}
          noweZadanieSwitch={noweZadanieSwitch}
          setEkranZapisuLB={setEkranZapisuLB}
        />
      </View>
      {ekranZapisuLB ? zapisLaderboardu() : <></>}
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
