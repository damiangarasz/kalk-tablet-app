import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type lolTyp = { setWynik: React.Dispatch<React.SetStateAction<number>> };

export default function Klawiatura({ setWynik }: lolTyp) {
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

  const [poprawna, setPoprawna] = useState("?");
  const styleButton =
    "w-18 bg-blue-500 py-2 px-4 rounded-lg active:bg-blue-600 shadow-md";
  return (
    <View className="bg-red-400 w-auto h-1/3 flex flex-row gap-5 flex-wrap">
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
  );
}
