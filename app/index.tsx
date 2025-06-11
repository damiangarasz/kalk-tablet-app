import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const tabliczka = Object.create(czyKce);

    const czyKce = {
      nieKce: function () {
        this.includes = false;
      },
      Kce: function () {
        this.includes = true;
      },
    };
  });

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
