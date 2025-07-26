import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

type EkranProps = {
  zadaneMnozenie: string;
  wpisanyWynik: number;
  wynikMnozenia: number;
  setSucess: React.Dispatch<React.SetStateAction<number>>;
  setPoprawna: React.Dispatch<React.SetStateAction<string>>;
  setShuffle: React.Dispatch<React.SetStateAction<string>>;
};

export default function Ekran({
  zadaneMnozenie,
  wpisanyWynik,
  wynikMnozenia,
  setSucess,
  setPoprawna,
  setShuffle,
}: EkranProps) {
  const animationLOLID = useRef<number | null>(null);
  const red = useRef(255);
  const [fail, setFail] = useState<number>(0);

  useEffect(() => {
    if (zadaneMnozenie == undefined) return;

    //zmiana koloru "wynik" na czerwony jak błąd
    function animation() {
      if (red.current <= 0) {
        if (animationLOLID.current != null)
          clearInterval(animationLOLID.current);
        red.current = 250;
        return;
      } else {
        setFail(() => {
          red.current -= 5;

          const y = red.current;
          return y;
        });
      }
    }

    if (
      wynikMnozenia.toString().length == wpisanyWynik.toString().length &&
      wynikMnozenia != wpisanyWynik
    ) {
      console.log("długość się zgadza ale wynik nie");
      animationLOLID.current = setInterval(animation, 25);
      setSucess((x) => {
        return x - 1;
      });
      setPoprawna(wpisanyWynik.toString());
      setShuffle("zatopiony");
    } else if (
      wynikMnozenia.toString().length == wpisanyWynik.toString().length &&
      wynikMnozenia == wpisanyWynik &&
      wynikMnozenia != 0
    ) {
      console.log("długość się zgadza", wynikMnozenia, wpisanyWynik);
      setSucess((x) => {
        return x + 1;
      });
      setShuffle("trafiony");
    } else {
      console.log("ściek");
    }
    //TODO TU jest zjebane lol looooool
    return () => {
      if (animationLOLID.current != null) clearInterval(animationLOLID.current);
    };
  }, [wpisanyWynik]);
  return (
    <View className="w-auto h-[150]">
      <Text className={`text-9xl text-[rgb(${red},0,0)]`}>
        {zadaneMnozenie}
      </Text>
    </View>
  );
}
