import { ImageBackground, Pressable, Text, View } from "react-native";
import { typKlawiatura } from "../types.ts";

export default function Klawiatura({
  setWpisanyWynik,
  wpisanyWynik,
  prawidlwoaOdpowiedz,
  challengeEnd,
}: typKlawiatura) {
  function click(x: number | string) {
    setWpisanyWynik((y) => {
      if (x == 0 && y == 0) {
        return 0;
      } else if (challengeEnd == true) {
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
    "w-18 bg-yellow-300 py-2 px-4 rounded-full active:bg-blue-600";
  const styleText = "text-5xl text-center";
  const colorColorText = { color: "rgba(88, 87, 85, 1)" };
  return (
    <ImageBackground source={require("../src/bg/bg.png")}>
      <View className="flex h-full">
        <View className="h-[90] w-1/2 mx-auto pt-2">
          <Text
            className="text-center text-6xl"
            style={{ color: "rgb(222,222,222)" }}
          >
            {wpisanyWynik}
          </Text>
        </View>
        <View className="flex w-[55%] mx-auto gap-4">
          <View className="flex flex-row justify-evenly">
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(1);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  1
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(2);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  2
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(3);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  3
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="flex flex-row justify-evenly">
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(4);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  4
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(5);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  5
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(6);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  6
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="flex flex-row justify-evenly">
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(7);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  7
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(8);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  8
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(9);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  9
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="flex flex-row justify-evenly">
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click(0);
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  0
                </Text>
              </Pressable>
            </View>
            <View className="w-[65]">
              <Pressable
                onPress={() => {
                  click("69");
                }}
                className={styleButton}
              >
                <Text
                  className={styleText}
                  selectable={false}
                  style={colorColorText}
                >
                  ⤆
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
