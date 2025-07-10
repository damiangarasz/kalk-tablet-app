import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
import Proba from "./proba/Proba";
import Zadanie from "./zadanie/Zadanie";

export default function Index() {
  console.log(Zadanie);
  // type typLoL = {
  //   czyChce: boolean;
  //   dzialanie: string;
  //   wynik: number;
  // };
  // const [tabliczka, setTabliczka] = useState<typLoL[]>([]);
  // const [sucess, setSucess] = useState<number>(0);
  // const [zadanie, setZadanie] = useState<(string | number)[]>([]);
  // const [shuffle, setShuffle] = useState("");

  // useEffect(() => {
  //   //Ustawianie tabliczki mnożenia
  //   const tabliczka: typLoL[] = [];
  //   for (let n = 2; n <= 12; n++) {
  //     for (let m = 2; m <= 12; m++) {
  //       const wynik = n * m;
  //       const obj: typLoL = {} as typLoL;
  //       const rdm = Math.floor(Math.random() * 100);

  //       if (rdm < 50) {
  //         obj.dzialanie = `${n}x${m}`;
  //       } else {
  //         obj.dzialanie = `${m}x${n}`;
  //       }
  //       obj.wynik = wynik;
  //       obj.czyChce = true;
  //       tabliczka.push(obj);
  //     }
  //   }

  //   setTabliczka(tabliczka);
  //   setShuffle("trafiony");
  // }, []);

  // const generatorTabliczki = Shuffle();
  // setTabliczka(generatorTabliczki[0]);

  // const [wynik, setWynik] = useState<number>(0);
  // function click(x: number | string) {
  //   setWynik((y) => {
  //     if (x == 0 && y == 0) {
  //       return 0;
  //     } else if (x == "69" && y != 0) {
  //       const string = y.toString();
  //       const length = string.length;
  //       const slice = string.slice(0, length - 1);
  //       return Number(slice);
  //     } else if (x == "69") {
  //       return 0;
  //     } else {
  //       const add = `${y}${x}`;
  //       return Number(add);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   const length = tabliczka.length;
  //   if (length == 0) return;

  //   function pick() {
  //     const shuffle = Math.floor(Math.random() * length);
  //     const picked = tabliczka[shuffle];

  //     setPoprawna("?");
  //     setWynik(0);

  //     if (picked.czyChce == false) {
  //       pick();
  //     } else {
  //       const dzialanie: string = picked.dzialanie;
  //       const wynik = picked.wynik;
  //       const zadanie: (string | number)[] = [];
  //       zadanie.push(dzialanie, wynik);
  //       setZadanie(zadanie);
  //     }
  //   }

  //   if (shuffle == "trafiony") {
  //     pick();
  //     setShuffle("");
  //   } else if (shuffle == "zatopiony") {
  //     setTimeout(pick, 3000);
  //     setShuffle("");
  //   }
  // }, [shuffle]);

  // const [fail, setFail] = useState<number>(0);
  // const red = useRef(255);
  // const animationLOLID = useRef<number | null>(null);
  // const [poprawna, setPoprawna] = useState("?");

  // useEffect(() => {
  //   if (zadanie[0] == undefined) return;

  //   //zmiana koloru "wynik" na czerwony jak błąd
  //   function animation() {
  //     if (red.current <= 0) {
  //       if (animationLOLID.current != null)
  //         clearInterval(animationLOLID.current);
  //       red.current = 250;
  //       return;
  //     } else {
  //       setFail(() => {
  //         red.current -= 5;

  //         const y = red.current;
  //         return y;
  //       });
  //     }
  //   }

  //   if (
  //     wynik.toString().length == zadanie[1].toString().length &&
  //     wynik != zadanie[1]
  //   ) {
  //     animationLOLID.current = setInterval(animation, 25);
  //     setSucess((x) => {
  //       return x - 1;
  //     });
  //     setPoprawna(zadanie[1].toString());
  //     setShuffle("zatopiony");
  //   } else if (wynik.toString().length == zadanie[1].toString().length) {
  //     setSucess((x) => {
  //       return x + 1;
  //     });
  //     setShuffle("trafiony");
  //   }
  //   //TODO TU jest zjebane lol looooool
  //   return () => {
  //     if (animationLOLID.current != null) clearInterval(animationLOLID.current);
  //   };
  // }, [wynik]);

  // const styleButton =
  //   "w-18 bg-blue-500 py-2 px-4 rounded-lg active:bg-blue-600 shadow-md";

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Zadanie />
        <Proba />
        {/* <View className="container w-auto h-[100%] bg-green-100">
          <View className="bg-yellow-300 w-auto h-[33%]">
            <Text className="text-7xl">{zadanie[0]}</Text>
            <Text className="text-7xl text-green-500">{poprawna}</Text>
            <Text>{sucess}</Text>
          </View>
          <View className="bg-blue-300 w-auto h-[33%]">
            <Text
              id="strzal"
              className={`text-7xl `}
              style={{ color: `rgb(${fail},0,0)` }}
            >
              {wynik}
            </Text>
          </View>
          <View className="bg-red-400 w-auto h-[33%] flex flex-row gap-5 flex-wrap">
            <Pressable
              onPress={() => {
                click(1);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">1</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(2);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">2</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(3);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">3</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(4);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">4</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(5);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">5</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(6);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">6</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(7);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">7</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(8);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">8</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(9);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">9</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click(0);
              }}
              className={styleButton}
            >
              <Text className="text-7xl">0</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("69");
              }}
              className={styleButton}
            >
              <Text className="text-7xl">⤆</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("dissable");
              }}
              className={styleButton}
            >
              <Text className="text-7xl">✘</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                click("enable");
              }}
              className={styleButton}
            >
              <Text className="text-7xl">✔</Text>
            </Pressable>
          </View>
        </View> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
