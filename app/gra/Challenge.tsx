import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { propsChallenge } from "../types";

export default function Challenge(props: propsChallenge) {
  const { licznikPoprawnychChallenge, challengeEnd, setChallengeEnd } = props;
  //zegar odliczania do startu i do zakończenia zadanie
  const [timer, setTimer] = useState(5);
  const [startGame, setStartGame] = useState(false);
  const [zegar, setZegar] = useState("0:00");

  useEffect(() => {
    if (startGame == true) {
      setTimer(180);
    }
    const odliczanie = setInterval(() => {
      setTimer((x) => {
        //tutaj dodać ligikę zakończenia gry
        if (x == 0) return 0;
        return x - 1;
      });
    }, 1000);
    setTimeout(() => {
      setStartGame(true);
    }, 5000);

    if (challengeEnd == true) {
      clearInterval(odliczanie);
    }

    return () => {
      clearInterval(odliczanie);
    };
  }, [startGame, challengeEnd]);

  useEffect(() => {
    //konwersja na minuty
    const m = Math.floor(timer / 60);
    const s = timer % 60;
    setZegar(`${m}:${s.toString().padStart(2, "0")}`);
  }, [timer]);

  function reset() {
    console.log(setChallengeEnd);
  }

  useEffect(() => {}, [timer]);
  return (
    <View>
      <Text>{zegar}</Text>
      <Text>{licznikPoprawnychChallenge}</Text>
      <Pressable
        onPress={() => {
          reset();
        }}
      >
        <Text>Restart</Text>
      </Pressable>
    </View>
  );
}
