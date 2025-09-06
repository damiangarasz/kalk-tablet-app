import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { jednoZadanie, propEkranZzadaniem, zadanie } from "../types.ts";

export default function EkranZzadaniem({
  poziom,
  aktualneZadanie,
  setAktualneZadanie,
  prawidlwoaOdpowiedz,
  setPrawidlowaOdpowiedz,
  wpisanyWynik,
  setWpisanyWynik,
}: propEkranZzadaniem) {
  const [easy, setEasy] = useState<zadanie>([
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

  const [czyPoprawna, setCzyPoprawna] = useState("");
  const [noweZadanieSwitch, setNoweZadanieSwitch] = useState(true);

  useEffect(() => {
    //funkcja losująca z tabliczki uwzględniająca wagę, sumuje każdą wagę a później wybiera losując między 0 a suma wszystkich wag i wypycha pierwsze zadanie które jest większe od wylosowanej liczby

    function pickOne(tabliczka: zadanie) {
      let sum = 0;
      let accumulatedArray = [];

      for (let n of tabliczka) {
        sum += n.waga;
        accumulatedArray.push(sum);
      }

      const index = Math.random() * sum;

      for (let n = 0; n < tabliczka.length; n++) {
        if (index < accumulatedArray[n]) {
          return tabliczka[n];
        }
      }

      return tabliczka[tabliczka.length - 1];
    }

    //prosta funkcja która ustawia wylosowaną wartość do odpowiednich komórek
    function wyswietlenieZadania(obj: jednoZadanie) {
      if (!obj) return;
      setAktualneZadanie(
        `${obj.dialanie[0]}${obj.dialanie[1]}${obj.dialanie[2]}`
      );
      if (
        typeof obj.dialanie[0] == "number" &&
        typeof obj.dialanie[2] == "number"
      )
        setPrawidlowaOdpowiedz(obj.dialanie[0] * obj.dialanie[2]);
    }

    //prosty switch lol
    switch (poziom) {
      case "easy":
        wyswietlenieZadania(pickOne(easy));
        break;
      case "medium":
        wyswietlenieZadania(pickOne(medium));
        break;
      case "hard":
        wyswietlenieZadania(pickOne(hard));
        break;
    }
  }, [noweZadanieSwitch]);

  //logika która pilnuje wpipsanych liczb przez klawiaturę
  useEffect(() => {
    if (
      prawidlwoaOdpowiedz &&
      wpisanyWynik.toString().length > prawidlwoaOdpowiedz.toString().length
    ) {
      //logika kiedy wpisuje za dużo cyfr

      setCzyPoprawna("niepoprawna");
    } else if (
      prawidlwoaOdpowiedz &&
      wpisanyWynik.toString().length == prawidlwoaOdpowiedz.toString().length &&
      wpisanyWynik != prawidlwoaOdpowiedz
    ) {
      //logika kiedy ilość cyfr się zgadza ale liczby nie sa sobie równe
      setCzyPoprawna("niepoprawna");
    } else if (
      prawidlwoaOdpowiedz &&
      wpisanyWynik.toString().length == prawidlwoaOdpowiedz.toString().length &&
      wpisanyWynik == prawidlwoaOdpowiedz
    ) {
      //logika kiedy ilość cyfr się zgadza i liczby sa sobie równe
      setCzyPoprawna("poprawna");
    } else {
      console.log("kupa");
    }
  }, [wpisanyWynik]);

  const [red, setRed] = useState(0);
  const [poprawna, setPoprawna] = useState("?");

  useEffect(() => {
    if (czyPoprawna == "") {
      return;
    } else if (czyPoprawna == "niepoprawna") {
      //logika odpowaidająca za pomalowanie zadania na czerowono pokazaniu poprawnego wyniku odczekaniu 3 sekund i wylosowaniu następnego zadania i zrasetownaiu czy Poprawna i odjęciu od score punktów

      //logika odpowiadająca za pomalowanie zadania na czerwono
      function redAnimate() {
        setRed(255);
        function step() {
          setRed((prev) => {
            if (prev <= 0) return 0;
            requestAnimationFrame(step);
            return prev - 1;
          });
        }
        const id = requestAnimationFrame(step);

        return () => cancelAnimationFrame(id);
      }
      redAnimate();

      //ustawienie poprawnej odpowiedzi

      setPoprawna(() => {
        if (prawidlwoaOdpowiedz) {
          return prawidlwoaOdpowiedz.toString();
        } else {
          return "?";
        }
      });

      //KONIEC
      console.log("setWpisanyWynik:", typeof setWpisanyWynik, wpisanyWynik);

      //logika odpowiedzialna za losowanie kolejnego zadania i pokazanie "?"
      const idSetTimeOut = setTimeout(() => {
        setNoweZadanieSwitch((prev) => (prev ? false : true));
        setPoprawna("?");
        setCzyPoprawna("");
      }, 3000);
      //KONIEC

      return () => {
        clearTimeout(idSetTimeOut);
      };
    } else if (czyPoprawna == "poprawna") {
      //logika odpowiadająca za dodanie punktu do score i wylosowaniu kolejnego zadania
      console.log("poprawna");
      setCzyPoprawna("");
    }
  }, [czyPoprawna]);

  return (
    <View>
      <View>
        <Text
          className={`w-1/2 m-auto text-center text-7xl`}
          style={{ color: `rgb(${red}, 0, 0)` }}
        >
          {aktualneZadanie}
        </Text>
      </View>
      <View className="w-1/2 m-auto text-center ">
        <Text className="w-1/2 m-auto text-center text-7xl text-green-600 ">
          {poprawna}
        </Text>
      </View>
    </View>
  );
}
