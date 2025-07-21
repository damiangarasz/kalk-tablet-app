import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import Klawiatura from "./proba/Klawiatura";
import Proba from "./proba/Proba";
import Zadanie from "./zadanie/Zadanie";

export default function Index() {
  const [wynik, setWynik] = useState<number>(0);
  // const [sucess, setSucess] = useState<number>(0);
  // const [shuffle, setShuffle] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Zadanie />
        <Proba />
        <Klawiatura />
        {/* <View className="container w-auto h-[100%] bg-green-100">
          <View className="bg-yellow-300 w-auto h-[33%]">
            <Text className="text-7xl">{zadanie[0]}</Text>
            <Text className="text-7xl text-green-500">{poprawna}</Text>
            <Text>{sucess}</Text>
          </View>
          <View className="bg-blue-300 w-auto h-[33%]">
            <Text
              id="strzal"
              className={`text-7xl `}
              style={{ color: `rgb(${fail},0,0)` }}
            >
              {wynik}
            </Text>
          </View>
          
        </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
