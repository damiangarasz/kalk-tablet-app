import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { propsChallenge } from "../types";

export default function Challenge(props: propsChallenge) {
  const {
    licznikPoprawnychChallenge,
    challengeEnd,
    setChallengeEnd,
    setPoprawna,
    setNoweZadanieSwitch,
    setLicznikPoprawnychChallenge,
  } = props;
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
        if (x == 0) {
          setChallengeEnd(true);
          return 0;
        }
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
    setChallengeEnd(false);
    setPoprawna("?");
    console.log(setNoweZadanieSwitch);
    setNoweZadanieSwitch((prev) => (prev ? false : true));
    setLicznikPoprawnychChallenge(0);
  }

  const [disable, setDisable] = useState(true);
  const [restart, setRestart] = useState("rgb(120,120,120)");
  useEffect(() => {
    if (challengeEnd) {
      setDisable(false);
      setRestart("rgb(203, 194, 76)");
    } else {
      setDisable(true);
      setRestart("rgb(120,120,120)");
    }
  }, [challengeEnd]);

  useEffect(() => {}, [timer]);
  return (
    <View className="flex flex-row my-auto">
      <Text className="w-[33%] text-center" selectable={false}>
        {zegar}
      </Text>
      <Text className="w-[33%] text-center" selectable={false}>
        {licznikPoprawnychChallenge}
      </Text>
      <View className="w-[33%]">
        <Pressable
          onPress={() => {
            reset();
          }}
          disabled={disable}
        >
          <Text
            style={{ backgroundColor: `${restart}` }}
            className="text-center rounded-md w-[80%] mx-auto"
            selectable={false}
          >
            Restart
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
