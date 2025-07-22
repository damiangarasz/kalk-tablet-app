import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import Klawiatura from "./proba/Klawiatura";
import Proba from "./proba/Proba";
import Zadanie from "./zadanie/Zadanie";

export default function Index() {
  const [wynik, setWynik] = useState<number>(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Zadanie wynik={wynik} />
        <Proba />
        <Klawiatura setWynik={setWynik} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
