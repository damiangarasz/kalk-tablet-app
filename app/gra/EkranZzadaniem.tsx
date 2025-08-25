import { useState } from "react";
import { Text, View } from "react-native";
import Shuffle from "../silnik/Shuffle.tsx";

export default function EkranZzadaniem(props: { poziom: string }) {
  const { poziom } = props;
  const [piecZadan, setPiecZadan] = useState<zadanie>([]);
  return (
    <View>
      <Shuffle poziom={poziom} />
      <Text>Ekran z zadaniem</Text>
    </View>
  );
}
