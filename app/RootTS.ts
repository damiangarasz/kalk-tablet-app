import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Dispatch, SetStateAction } from "react";

export type RootStackParamList = {
  Menu: undefined;
  App: undefined;
  PoziomTrudnosci: {
    setPoziom: Dispatch<SetStateAction<string>>;
  };
};

export type PoziomTrudnosciScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "PoziomTrudnosci">;
  route: RouteProp<RootStackParamList, "PoziomTrudnosci">;
};
