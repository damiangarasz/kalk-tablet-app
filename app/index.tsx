import { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import Klawiatura from "./proba/Klawiatura";
import Proba from "./proba/Proba";
import Zadanie from "./zadanie/Zadanie.tsx";

export default function Index() {
  const [wynik, setWynik] = useState<number>(0);
  const [wpisanyWynik, setWpisanyWynik] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View className="h-screen">
          <Zadanie
            wpisanyWynik={wpisanyWynik}
            setWpisanyWynik={setWpisanyWynik}
          />
          <Proba wynik={wynik} />
          <Klawiatura setWynik={setWynik} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
