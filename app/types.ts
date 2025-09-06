export type zadanie = { dialanie: (string | number)[]; waga: number }[];

export type jednoZadanie = { dialanie: (string | number)[]; waga: number };

export type propEkranZzadaniem = {
  poziom: string;
  aktualneZadanie: string;
  setAktualneZadanie: React.Dispatch<React.SetStateAction<string>>;
  prawidlwoaOdpowiedz: number | null;
  setPrawidlowaOdpowiedz: React.Dispatch<React.SetStateAction<number | null>>;
  wpisanyWynik: number;
};

export type typKlawiatura = {
  setWpisanyWynik: React.Dispatch<React.SetStateAction<number>>;
  wpisanyWynik: number;
  prawidlwoaOdpowiedz: number | null;
};
