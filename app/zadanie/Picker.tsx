type typLoL = {
  czyChce: boolean;
  dzialanie: string;
  wynik: number;
};

export default function Picker(
  tabliczkaMnożenia: readonly [typLoL[], string],
  setPoprawna: (x: string) => void,
  setWpisanyWynik: (y: number) => void,
  setZadaneMnożenie: (z: (string | number)[]) => void
) {
  const tablica = tabliczkaMnożenia[0];
  const length = tablica.length;
  if (length == 0) return;
  console.log("hera");
  pick();
  function pick() {
    const shuffle = Math.floor(Math.random() * length);
    const picked = tablica[shuffle];

    setPoprawna("?");
    setWpisanyWynik(0);

    if (picked.czyChce == false) {
      pick();
    } else {
      const dzialanie: string = picked.dzialanie;
      const wynik = picked.wynik;
      const zadanie: (string | number)[] = [];
      zadanie.push(dzialanie, wynik);
      setZadaneMnożenie(zadanie);
    }
  }
}
