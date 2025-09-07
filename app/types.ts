export type zadanie = { dialanie: (string | number)[]; waga: number }[];

export type jednoZadanie = { dialanie: (string | number)[]; waga: number };

export type propEkranZzadaniem = {
  poziom: string;
  aktualneZadanie: string;
  setAktualneZadanie: React.Dispatch<React.SetStateAction<string>>;
  prawidlwoaOdpowiedz: number | null;
  setPrawidlowaOdpowiedz: React.Dispatch<React.SetStateAction<number | null>>;
  wpisanyWynik: number;
  setWpisanyWynik: React.Dispatch<React.SetStateAction<number>>;
  setCounterPositive: React.Dispatch<React.SetStateAction<number>>;
  setCounterNegative: React.Dispatch<React.SetStateAction<number>>;
};

export type typKlawiatura = {
  setWpisanyWynik: React.Dispatch<React.SetStateAction<number>>;
  wpisanyWynik: number;
  prawidlwoaOdpowiedz: number | null;
};

export type typTablicaWynikowProps = {
  counterPositive: number;
  counterNegative: number;
  setCounterPositive: React.Dispatch<React.SetStateAction<number>>;
  setCounterNegative: React.Dispatch<React.SetStateAction<number>>;
  poziom: string;
};
