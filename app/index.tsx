import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function Index() {
  type typLoL = { [key: string]: string | number | boolean };
  const [tabliczka, setTabliczka] = useState<typLoL[]>([]);

  useEffect(() => {
    const tabliczka: typLoL[] = [];
    for (let n = 2; n <= 12; n++) {
      for (let m = 2; m <= 12; m++) {
        const wynik = n * m;
        const obj: typLoL = {} as typLoL;
        obj.dzialanie = `${n}x${m}`;
        obj.wynik = wynik;
        obj.czyChce = true;
        tabliczka.push(obj);
      }
    }
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

  const [sucess, setSucess] = useState<number>(0);

  useEffect(() => {
    const length = tabliczka.length;
  }, [sucess]);

  useEffect(() => {}, [wynik]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="container w-auto h-[100%] bg-green-100">
          <View className="bg-yellow-300 w-auto h-[33%]"></View>
          <View className="bg-blue-300 w-auto h-[33%]">
            <Text>{wynik}</Text>
          </View>
          <View className="bg-red-400 w-auto h-[33%] flex flex-row gap-5 flex-wrap">
            <Pressable
              onPress={() => {
                click(1);
              }}
              className="w-12"
            >
              <Text className="text-7xl">1</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(2);
              }}
              className="w-12"
            >
              <Text className="text-7xl">2</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(3);
              }}
              className="w-12"
            >
              <Text className="text-7xl">3</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(4);
              }}
              className="w-12"
            >
              <Text className="text-7xl">4</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(5);
              }}
              className="w-12"
            >
              <Text className="text-7xl">5</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(6);
              }}
              className="w-12"
            >
              <Text className="text-7xl">6</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(7);
              }}
              className="w-12"
            >
              <Text className="text-7xl">7</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(8);
              }}
              className="w-12"
            >
              <Text className="text-7xl">8</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(9);
              }}
              className="w-12"
            >
              <Text className="text-7xl">9</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(0);
              }}
              className="w-12"
            >
              <Text className="text-7xl">0</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("69");
              }}
              className="w-12"
            >
              <Text className="text-7xl">⤆</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("dissable");
              }}
              className="w-12"
            >
              <Text className="text-7xl">✘</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("enable");
              }}
              className="w-12"
            >
              <Text className="text-7xl">✔</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
