type typLoL = {
  czyChce: boolean;
  dzialanie: string;
  wynik: number;
};

export default function Shuffle(setTabliczka: (value: typLoL[]) => void) {
  //Ustawianie tabliczki mnożenia
  const tabliczka: typLoL[] = [];
  for (let n = 2; n <= 12; n++) {
    for (let m = 2; m <= 12; m++) {
      const wynik = n * m;
      const obj: typLoL = {} as typLoL;
      const rdm = Math.floor(Math.random() * 100);

      if (rdm < 50) {
        obj.dzialanie = `${n}x${m}`;
      } else {
        obj.dzialanie = `${m}x${n}`;
      }
      obj.wynik = wynik;
      obj.czyChce = true;
      tabliczka.push(obj);
    }
  }

  console.log("halo to ja");

  setTabliczka(tabliczka);

  //   return [tabliczka, "rafiony"];
}
