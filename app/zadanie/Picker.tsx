type typLoL = {
  czyChce: boolean;
  dzialanie: string;
  wynik: number;
};

export default function Picker(
  tabliczkaMnożenia: readonly [typLoL[], string],
  setPoprawna: React.Dispatch<React.SetStateAction<string>>,
  setWpisanyWynik: React.Dispatch<React.SetStateAction<number>>,
  setZadaneMnożenie: React.Dispatch<
    React.SetStateAction<(string | number)[] | undefined>
  >
) {
  const tablica = tabliczkaMnożenia[0];
  const length = tablica.length;
  if (length == 0) return;
  const dostepneZadania = tablica.filter((zadanie) => zadanie.czyChce);

  if (dostepneZadania.length === 0) {
    console.log("Brak dostępnych zadań do wylosowania.");
    return;
  }

  const losowyIndex = Math.floor(Math.random() * dostepneZadania.length);
  const wylosowaneZadanie = dostepneZadania[losowyIndex];

  setPoprawna("?");
  setWpisanyWynik(0);
  setZadaneMnożenie([wylosowaneZadanie.dzialanie, wylosowaneZadanie.wynik]);
}
