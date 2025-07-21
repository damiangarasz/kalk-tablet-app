import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

type EkranProps = {
  zadaneMnozenie: string | number | undefined;
  wynik: number;
  setSucess: React.Dispatch<React.SetStateAction<number>>;
  setPoprawna: React.Dispatch<React.SetStateAction<string>>;
  setShuffle: React.Dispatch<React.SetStateAction<string>>;
};

export default function Ekran({
  zadaneMnozenie,
  wynik,
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
      wynik.toString().length == zadaneMnozenie.toString().length &&
      wynik != zadaneMnozenie
    ) {
      animationLOLID.current = setInterval(animation, 25);
      setSucess((x) => {
        return x - 1;
      });
      setPoprawna(zadaneMnozenie.toString());
      setShuffle("zatopiony");
    } else if (wynik.toString().length == zadaneMnozenie.toString().length) {
      setSucess((x) => {
        return x + 1;
      });
      setShuffle("trafiony");
    }
    //TODO TU jest zjebane lol looooool
    return () => {
      if (animationLOLID.current != null) clearInterval(animationLOLID.current);
    };
  }, [wynik]);
  return (
    <View className="w-auto h-[150]">
      <Text className="text-5xl">{zadaneMnozenie}</Text>
    </View>
  );
}
