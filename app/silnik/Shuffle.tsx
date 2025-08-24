import { useState } from "react";
import { zadanie } from "../types";
import { easy } from "./Tabliczka";
//TODO zastosuj wagę

const [proba, setProba] = useState(0);

export default function Shuffle(props: string) {
  const piecZadan: zadanie = [];

  function pick5(tabliczka: zadanie) {
    for (let n = 0; n <= 5; n++) {
      function pickZadanie() {
        const lenght = tabliczka.length;
        const number = Math.floor(Math.random() * lenght);
        const rzutKostka = Math.random();

        if (tabliczka[number].waga > rzutKostka) {
          piecZadan.push(tabliczka[number]);
        } else {
          if (proba >= 5) {
            return;
          } else {
            setProba((x) => (x += 1));
            pickZadanie();
          }
        }
      }
      pickZadanie();
    }
  }

  switch (props) {
    case "easy":
      pick5(easy);
  }

  return piecZadan;
}
