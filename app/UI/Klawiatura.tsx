import { Pressable, Text, View } from "react-native";
import { typKlawiatura } from "../types.ts";

export default function Klawiatura({
  setWpisanyWynik,
  wpisanyWynik,
  prawidlwoaOdpowiedz,
}: typKlawiatura) {
  function click(x: number | string) {
    setWpisanyWynik((y) => {
      if (x == 0 && y == 0) {
        return 0;
      } else if (x == "69" && y != 0) {
        const string = y.toString();
        const length = string.length;
        const slice = string.slice(0, length - 1);
        return Number(slice);
      } else if (x == "69") {
        return 0;
      } else if (
        prawidlwoaOdpowiedz &&
        wpisanyWynik &&
        prawidlwoaOdpowiedz.toString().length <= wpisanyWynik.toString().length
      ) {
        return y;
      } else {
        const add = `${y}${x}`;
        return Number(add);
      }
    });
  }

  const styleButton =
    "w-18 bg-blue-500 py-2 px-4 rounded-lg active:bg-blue-600 shadow-md";
  return (
    //TODO zmienić na grida bo fixed values mnie ugryzie w dupę
    <View className="flex h-full bg-red-400">
      <View className="h-[90] w-1/2 mx-auto pt-2">
        <Text className="text-center text-6xl">{wpisanyWynik}</Text>
      </View>
      <View className="w-[257] mx-auto flex flex-row gap-5 flex-wrap">
        <Pressable
          onPress={() => {
            click(1);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            1
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(2);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            2
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(3);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            3
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(4);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            4
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(5);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            5
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(6);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            6
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(7);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            7
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(8);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            8
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(9);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            9
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click(0);
          }}
          className={styleButton}
        >
          <Text className="text-5xl" selectable={false}>
            0
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            click("69");
          }}
          className={styleButton}
        >
          <Text className="text-5xl w-[132]" selectable={false}>
            ⤆
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
