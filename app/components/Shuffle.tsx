import { useEffect } from "react";

type typLoL = {
  czyChce: boolean;
  dzialanie: string;
  wynik: number;
};

const [tabliczka, setTabliczka] = useState<typLoL[]>([]);

export default function Shuffle() {
  useEffect(() => {
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

    setTabliczka(tabliczka);
    setShuffle("trafiony");
  }, []);
}
