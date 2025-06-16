import { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function Index() {
  type typLoL = {
    czyChce: boolean;
    dzialanie: string;
    wynik: number;
  };
  const [tabliczka, setTabliczka] = useState<typLoL[]>([]);
  const [sucess, setSucess] = useState<number>(-1);
  const [zadanie, setZadanie] = useState<(string | number)[]>([]);

  useEffect(() => {
    const tabliczka: typLoL[] = [];
    for (let n = 2; n <= 12; n++) {
      for (let m = 2; m <= 12; m++) {
        const wynik = n * m;
        const obj: typLoL = {} as typLoL;
        const rdm = Math.floor(Math.random() * 100);

        if (rdm < 50) {
          obj.dzialanie = `${n}x${m}`;
        } else {
          obj.dzialanie = `${m}x${n}`;
        }
        obj.wynik = wynik;
        obj.czyChce = true;
        tabliczka.push(obj);
      }
    }
    setSucess(0);
    setTabliczka(tabliczka);
  }, []);

  const [wynik, setWynik] = useState<number>(0);
  function click(x: number | string) {
    setWynik((y) => {
      if (x == 0 && y == 0) {
        return 0;
      } else if (x == "69" && y != 0) {
        const string = y.toString();
        const length = string.length;
        const slice = string.slice(0, length - 1);
        return Number(slice);
      } else if (x == "69") {
        return 0;
      } else {
        const add = `${y}${x}`;
        return Number(add);
      }
    });
  }

  useEffect(() => {
    const length = tabliczka.length;

    if (length == 0) return;

    function pick() {
      const shuffle = Math.floor(Math.random() * length);
      const picked = tabliczka[shuffle];

      if (picked.czyChce == false) {
        pick();
      } else {
        const dzialanie: string = picked.dzialanie;
        const wynik = picked.wynik;
        const zadanie: (string | number)[] = [];
        zadanie.push(dzialanie, wynik);
        setZadanie(zadanie);
      }
    }
    pick();
  }, [sucess]);

  const failHighlight = useRef(0);

  useEffect(() => {
    //tutaj jeżeli wynik więcej niż length zadania to fail
    //jeżeli wynik length == length ale != to fail
    if (zadanie[0] == undefined) return;
    function animation() {}
    if (
      wynik.toString().length == zadanie[1].toString().length &&
      wynik != zadanie[1]
    ) {
      setSucess((x) => {
        return x - 1;
      });
      let num = 255;

      requestAnimationFrame(animation);
    }
    return cancelAnimationFrame(animation);
    //TODO TU jest zjebane lol
  }, [wynik]);

  const styleButton =
    "w-18 bg-blue-500 py-2 px-4 rounded-lg active:bg-blue-600 shadow-md";

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="container w-auto h-[100%] bg-green-100">
          <View className="bg-yellow-300 w-auto h-[33%]">
            <Text className="text-7xl">{zadanie[0]}</Text>
            <Text>{sucess}</Text>
          </View>
          <View className="bg-blue-300 w-auto h-[33%]">
            <Text
              id="strzal"
              className={`text-7xl text-[rgb(${failHighlight.toString()},0,0)]`}
            >
              {wynik}
            </Text>
          </View>
          <View className="bg-red-400 w-auto h-[33%] flex flex-row gap-5 flex-wrap">
            <Pressable
              onPress={() => {
                click(1);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">1</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(2);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">2</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(3);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">3</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(4);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">4</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(5);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">5</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(6);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">6</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(7);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">7</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(8);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">8</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(9);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">9</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(0);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">0</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("69");
              }}
              className={styleButton}
            >
              <Text className="text-7xl">⤆</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("dissable");
              }}
              className={styleButton}
            >
              <Text className="text-7xl">✘</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("enable");
              }}
              className={styleButton}
            >
              <Text className="text-7xl">✔</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
