import { useState } from "react";
import { View } from "react-native";
import { zadanie } from "../types";
//TODO zastosuj wagę

export default function Shuffle(props: { poziom: string }) {
  const { poziom } = props;
  const [proba, setProba] = useState(0);
  const [easy, setEasy] = useState([
    { dialanie: [2, "x", 2], waga: 1 },
    { dialanie: [2, "x", 3], waga: 1 },
    { dialanie: [2, "x", 4], waga: 1 },
    { dialanie: [2, "x", 5], waga: 1 },
    { dialanie: [2, "x", 6], waga: 1 },
    { dialanie: [2, "x", 7], waga: 1 },
    { dialanie: [2, "x", 8], waga: 1 },
    { dialanie: [2, "x", 9], waga: 1 },
    { dialanie: [2, "x", 10], waga: 1 },
    { dialanie: [2, "x", 11], waga: 1 },
    { dialanie: [2, "x", 12], waga: 1 },
    { dialanie: [3, "x", 3], waga: 1 },
    { dialanie: [3, "x", 4], waga: 0.7 },
    { dialanie: [3, "x", 5], waga: 1 },
    { dialanie: [3, "x", 6], waga: 0.7 },
    { dialanie: [3, "x", 7], waga: 0.7 },
    { dialanie: [3, "x", 8], waga: 0.7 },
    { dialanie: [3, "x", 9], waga: 0.7 },
    { dialanie: [3, "x", 10], waga: 1 },
    { dialanie: [3, "x", 11], waga: 1 },
    { dialanie: [3, "x", 12], waga: 0.5 },
    { dialanie: [4, "x", 4], waga: 1 },
    { dialanie: [4, "x", 5], waga: 1 },
    { dialanie: [4, "x", 6], waga: 1 },
    { dialanie: [4, "x", 7], waga: 0.5 },
    { dialanie: [4, "x", 8], waga: 0.5 },
    { dialanie: [4, "x", 9], waga: 0.5 },
    { dialanie: [4, "x", 10], waga: 1 },
    { dialanie: [4, "x", 11], waga: 1 },
    { dialanie: [4, "x", 12], waga: 0.5 },
    { dialanie: [5, "x", 5], waga: 1 },
    { dialanie: [5, "x", 6], waga: 0.7 },
    { dialanie: [5, "x", 7], waga: 0.5 },
    { dialanie: [5, "x", 8], waga: 0.7 },
    { dialanie: [5, "x", 9], waga: 0.5 },
    { dialanie: [5, "x", 10], waga: 1 },
    { dialanie: [5, "x", 11], waga: 1 },
    { dialanie: [5, "x", 12], waga: 0.5 },
    { dialanie: [6, "x", 6], waga: 1 },
    { dialanie: [6, "x", 7], waga: 0.5 },
    { dialanie: [6, "x", 8], waga: 0.2 },
    { dialanie: [6, "x", 9], waga: 0.2 },
    { dialanie: [6, "x", 10], waga: 1 },
    { dialanie: [6, "x", 11], waga: 1 },
    { dialanie: [6, "x", 12], waga: 0.2 },
    { dialanie: [7, "x", 7], waga: 0.5 },
    { dialanie: [7, "x", 8], waga: 0.2 },
    { dialanie: [7, "x", 9], waga: 0.2 },
    { dialanie: [7, "x", 10], waga: 1 },
    { dialanie: [7, "x", 11], waga: 1 },
    { dialanie: [7, "x", 12], waga: 0 },
    { dialanie: [8, "x", 8], waga: 0.2 },
    { dialanie: [8, "x", 9], waga: 0.2 },
    { dialanie: [8, "x", 10], waga: 1 },
    { dialanie: [8, "x", 11], waga: 1 },
    { dialanie: [8, "x", 12], waga: 0 },
    { dialanie: [9, "x", 9], waga: 0.2 },
    { dialanie: [9, "x", 10], waga: 1 },
    { dialanie: [9, "x", 11], waga: 1 },
    { dialanie: [9, "x", 12], waga: 0 },
    { dialanie: [10, "x", 10], waga: 1 },
    { dialanie: [10, "x", 11], waga: 1 },
    { dialanie: [10, "x", 12], waga: 1 },
    { dialanie: [11, "x", 11], waga: 0 },
    { dialanie: [11, "x", 12], waga: 0 },
    { dialanie: [12, "x", 12], waga: 0 },
  ]);

  const [medium, setMedium] = useState([
    { dialanie: [2, "x", 2], waga: 0 },
    { dialanie: [2, "x", 3], waga: 0 },
    { dialanie: [2, "x", 4], waga: 0 },
    { dialanie: [2, "x", 5], waga: 0 },
    { dialanie: [2, "x", 6], waga: 0 },
    { dialanie: [2, "x", 7], waga: 0 },
    { dialanie: [2, "x", 8], waga: 0 },
    { dialanie: [2, "x", 9], waga: 0 },
    { dialanie: [2, "x", 10], waga: 0 },
    { dialanie: [2, "x", 11], waga: 0 },
    { dialanie: [2, "x", 12], waga: 0 },
    { dialanie: [3, "x", 3], waga: 0 },
    { dialanie: [3, "x", 4], waga: 1 },
    { dialanie: [3, "x", 5], waga: 0 },
    { dialanie: [3, "x", 6], waga: 1 },
    { dialanie: [3, "x", 7], waga: 0.7 },
    { dialanie: [3, "x", 8], waga: 0.5 },
    { dialanie: [3, "x", 9], waga: 0.5 },
    { dialanie: [3, "x", 10], waga: 0 },
    { dialanie: [3, "x", 11], waga: 0 },
    { dialanie: [3, "x", 12], waga: 0 },
    { dialanie: [4, "x", 4], waga: 1 },
    { dialanie: [4, "x", 5], waga: 0 },
    { dialanie: [4, "x", 6], waga: 1 },
    { dialanie: [4, "x", 7], waga: 0.5 },
    { dialanie: [4, "x", 8], waga: 0.2 },
    { dialanie: [4, "x", 9], waga: 0.2 },
    { dialanie: [4, "x", 10], waga: 0 },
    { dialanie: [4, "x", 11], waga: 0 },
    { dialanie: [4, "x", 12], waga: 0 },
    { dialanie: [5, "x", 5], waga: 0 },
    { dialanie: [5, "x", 6], waga: 0 },
    { dialanie: [5, "x", 7], waga: 0.7 },
    { dialanie: [5, "x", 8], waga: 0.2 },
    { dialanie: [5, "x", 9], waga: 0.5 },
    { dialanie: [5, "x", 10], waga: 0 },
    { dialanie: [5, "x", 11], waga: 0 },
    { dialanie: [5, "x", 12], waga: 0.5 },
    { dialanie: [6, "x", 6], waga: 0.5 },
    { dialanie: [6, "x", 7], waga: 0.5 },
    { dialanie: [6, "x", 8], waga: 0.2 },
    { dialanie: [6, "x", 9], waga: 0.2 },
    { dialanie: [6, "x", 10], waga: 0 },
    { dialanie: [6, "x", 11], waga: 0 },
    { dialanie: [6, "x", 12], waga: 0.2 },
    { dialanie: [7, "x", 7], waga: 0.5 },
    { dialanie: [7, "x", 8], waga: 0.5 },
    { dialanie: [7, "x", 9], waga: 0.7 },
    { dialanie: [7, "x", 10], waga: 0 },
    { dialanie: [7, "x", 11], waga: 0.7 },
    { dialanie: [7, "x", 12], waga: 0.2 },
    { dialanie: [8, "x", 8], waga: 0.7 },
    { dialanie: [8, "x", 9], waga: 0.5 },
    { dialanie: [8, "x", 10], waga: 0 },
    { dialanie: [8, "x", 11], waga: 0 },
    { dialanie: [8, "x", 12], waga: 0.2 },
    { dialanie: [9, "x", 9], waga: 0.7 },
    { dialanie: [9, "x", 10], waga: 0 },
    { dialanie: [9, "x", 11], waga: 0 },
    { dialanie: [9, "x", 12], waga: 0.2 },
    { dialanie: [10, "x", 10], waga: 0 },
    { dialanie: [10, "x", 11], waga: 0 },
    { dialanie: [10, "x", 12], waga: 0 },
    { dialanie: [11, "x", 11], waga: 0.2 },
    { dialanie: [11, "x", 12], waga: 0.2 },
    { dialanie: [12, "x", 12], waga: 0.2 },
  ]);

  const [hard, setHard] = useState([
    { dialanie: [2, "x", 2], waga: 0 },
    { dialanie: [2, "x", 3], waga: 0 },
    { dialanie: [2, "x", 4], waga: 0 },
    { dialanie: [2, "x", 5], waga: 0 },
    { dialanie: [2, "x", 6], waga: 0 },
    { dialanie: [2, "x", 7], waga: 0 },
    { dialanie: [2, "x", 8], waga: 0 },
    { dialanie: [2, "x", 9], waga: 0 },
    { dialanie: [2, "x", 10], waga: 0 },
    { dialanie: [2, "x", 11], waga: 0 },
    { dialanie: [2, "x", 12], waga: 0 },
    { dialanie: [3, "x", 3], waga: 0 },
    { dialanie: [3, "x", 4], waga: 0 },
    { dialanie: [3, "x", 5], waga: 0 },
    { dialanie: [3, "x", 6], waga: 1 },
    { dialanie: [3, "x", 7], waga: 1 },
    { dialanie: [3, "x", 8], waga: 1 },
    { dialanie: [3, "x", 9], waga: 1 },
    { dialanie: [3, "x", 10], waga: 0 },
    { dialanie: [3, "x", 11], waga: 0 },
    { dialanie: [3, "x", 12], waga: 0 },
    { dialanie: [4, "x", 4], waga: 1 },
    { dialanie: [4, "x", 5], waga: 0 },
    { dialanie: [4, "x", 6], waga: 1 },
    { dialanie: [4, "x", 7], waga: 1 },
    { dialanie: [4, "x", 8], waga: 1 },
    { dialanie: [4, "x", 9], waga: 1 },
    { dialanie: [4, "x", 10], waga: 0 },
    { dialanie: [4, "x", 11], waga: 0 },
    { dialanie: [4, "x", 12], waga: 0 },
    { dialanie: [5, "x", 5], waga: 0 },
    { dialanie: [5, "x", 6], waga: 0 },
    { dialanie: [5, "x", 7], waga: 1 },
    { dialanie: [5, "x", 8], waga: 1 },
    { dialanie: [5, "x", 9], waga: 1 },
    { dialanie: [5, "x", 10], waga: 0 },
    { dialanie: [5, "x", 11], waga: 0 },
    { dialanie: [5, "x", 12], waga: 1 },
    { dialanie: [6, "x", 6], waga: 0 },
    { dialanie: [6, "x", 7], waga: 1 },
    { dialanie: [6, "x", 8], waga: 1 },
    { dialanie: [6, "x", 9], waga: 1 },
    { dialanie: [6, "x", 10], waga: 0 },
    { dialanie: [6, "x", 11], waga: 0 },
    { dialanie: [6, "x", 12], waga: 1 },
    { dialanie: [7, "x", 7], waga: 1 },
    { dialanie: [7, "x", 8], waga: 1 },
    { dialanie: [7, "x", 9], waga: 1 },
    { dialanie: [7, "x", 10], waga: 0 },
    { dialanie: [7, "x", 11], waga: 0 },
    { dialanie: [7, "x", 12], waga: 1 },
    { dialanie: [8, "x", 8], waga: 1 },
    { dialanie: [8, "x", 9], waga: 1 },
    { dialanie: [8, "x", 10], waga: 0 },
    { dialanie: [8, "x", 11], waga: 0 },
    { dialanie: [8, "x", 12], waga: 1 },
    { dialanie: [9, "x", 9], waga: 1 },
    { dialanie: [9, "x", 10], waga: 0 },
    { dialanie: [9, "x", 11], waga: 0 },
    { dialanie: [9, "x", 12], waga: 1 },
    { dialanie: [10, "x", 10], waga: 0 },
    { dialanie: [10, "x", 11], waga: 0 },
    { dialanie: [10, "x", 12], waga: 0 },
    { dialanie: [11, "x", 11], waga: 1 },
    { dialanie: [11, "x", 12], waga: 1 },
    { dialanie: [12, "x", 12], waga: 1 },
  ]);

  const [adaptive, setAdaptive] = useState([
    { dialanie: [2, "x", 2], waga: 0.5 },
    { dialanie: [2, "x", 3], waga: 0.5 },
    { dialanie: [2, "x", 4], waga: 0.5 },
    { dialanie: [2, "x", 5], waga: 0.5 },
    { dialanie: [2, "x", 6], waga: 0.5 },
    { dialanie: [2, "x", 7], waga: 0.5 },
    { dialanie: [2, "x", 8], waga: 0.5 },
    { dialanie: [2, "x", 9], waga: 0.5 },
    { dialanie: [2, "x", 10], waga: 0.5 },
    { dialanie: [2, "x", 11], waga: 0.5 },
    { dialanie: [2, "x", 12], waga: 0.5 },
    { dialanie: [3, "x", 3], waga: 0.5 },
    { dialanie: [3, "x", 4], waga: 0.5 },
    { dialanie: [3, "x", 5], waga: 0.5 },
    { dialanie: [3, "x", 6], waga: 0.5 },
    { dialanie: [3, "x", 7], waga: 0.5 },
    { dialanie: [3, "x", 8], waga: 0.5 },
    { dialanie: [3, "x", 9], waga: 0.5 },
    { dialanie: [3, "x", 10], waga: 0.5 },
    { dialanie: [3, "x", 11], waga: 0.5 },
    { dialanie: [3, "x", 12], waga: 0.5 },
    { dialanie: [4, "x", 4], waga: 0.5 },
    { dialanie: [4, "x", 5], waga: 0.5 },
    { dialanie: [4, "x", 6], waga: 0.5 },
    { dialanie: [4, "x", 7], waga: 0.5 },
    { dialanie: [4, "x", 8], waga: 0.5 },
    { dialanie: [4, "x", 9], waga: 0.5 },
    { dialanie: [4, "x", 10], waga: 0.5 },
    { dialanie: [4, "x", 11], waga: 0.5 },
    { dialanie: [4, "x", 12], waga: 0.5 },
    { dialanie: [5, "x", 5], waga: 0.5 },
    { dialanie: [5, "x", 6], waga: 0.5 },
    { dialanie: [5, "x", 7], waga: 0.5 },
    { dialanie: [5, "x", 8], waga: 0.5 },
    { dialanie: [5, "x", 9], waga: 0.5 },
    { dialanie: [5, "x", 10], waga: 0.5 },
    { dialanie: [5, "x", 11], waga: 0.5 },
    { dialanie: [5, "x", 12], waga: 0.5 },
    { dialanie: [6, "x", 6], waga: 0.5 },
    { dialanie: [6, "x", 7], waga: 0.5 },
    { dialanie: [6, "x", 8], waga: 0.5 },
    { dialanie: [6, "x", 9], waga: 0.5 },
    { dialanie: [6, "x", 10], waga: 0.5 },
    { dialanie: [6, "x", 11], waga: 0.5 },
    { dialanie: [6, "x", 12], waga: 0.5 },
    { dialanie: [7, "x", 7], waga: 0.5 },
    { dialanie: [7, "x", 8], waga: 0.5 },
    { dialanie: [7, "x", 9], waga: 0.5 },
    { dialanie: [7, "x", 10], waga: 0.5 },
    { dialanie: [7, "x", 11], waga: 0.5 },
    { dialanie: [7, "x", 12], waga: 0.5 },
    { dialanie: [8, "x", 8], waga: 0.5 },
    { dialanie: [8, "x", 9], waga: 0.5 },
    { dialanie: [8, "x", 10], waga: 0.5 },
    { dialanie: [8, "x", 11], waga: 0.5 },
    { dialanie: [8, "x", 12], waga: 0.5 },
    { dialanie: [9, "x", 9], waga: 0.5 },
    { dialanie: [9, "x", 10], waga: 0.5 },
    { dialanie: [9, "x", 11], waga: 0.5 },
    { dialanie: [9, "x", 12], waga: 0.5 },
    { dialanie: [10, "x", 10], waga: 0.5 },
    { dialanie: [10, "x", 11], waga: 0.5 },
    { dialanie: [10, "x", 12], waga: 0.5 },
    { dialanie: [11, "x", 11], waga: 0.5 },
    { dialanie: [11, "x", 12], waga: 0.5 },
    { dialanie: [12, "x", 12], waga: 0.5 },
  ]);
  const piecZadan: zadanie = [];

  console.log("LOL");

  function pickOne(tabliczka: zadanie) {
    let length;
    if (tabliczka) {
      length = tabliczka.length;
    } else {
      return;
    }
    const number = Math.floor(Math.random() * length);
    const rzutKostka = Math.random();

    if (tabliczka[number].waga >= rzutKostka) {
      piecZadan.push(tabliczka[number]);
    } else {
      if (proba >= 5) {
        return;
      } else {
        setProba((x) => (x += 1));
      }
    }
  }

  const [aktualneZadanie, setAktualneZadanie] = useState("?");
  const [prawidlwoaOdpowiedz, setPrawidllowaOdpowiedz] = useState<
    number | null
  >(null);

  function wyswietlenieZadania(obj: zadanie) {
    setAktualneZadanie(
      `${obj.dialanie[0]}${obj.dialanie[1]}${obj.dialanie[2]}`
    );
    setPrawidllowaOdpowiedz(obj.dzialanie[0] * obj.dzialanie[2]);
  }

  switch (poziom) {
    case "easy":
      wyswietlenieZadania(pickOne(easy));
      break;
    case "medium":
      pickOne(medium);
      break;
    case "hard":
      pickOne(hard);
      break;
  }

  if (piecZadan) {
  }

  return <View></View>;
}
