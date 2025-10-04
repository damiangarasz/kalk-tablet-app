import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebaseConfig";

export default function SignUpLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    try {
      const userCredencials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.log(e);
    }
  };

  const signUp = async () => {
    try {
      const userCredencials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.log(e);
    }
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const [isLogInB, setIsLogInB] = useState<User | null>(null);

  const monitorAutState = async () => {
    const isLogIn = onAuthStateChanged(auth, (user) => {
      setIsLogInB(user);
    });

    return isLogIn;
  };
  monitorAutState();

  const ifLoggedIn = () => {
    return (
      <View className=" w-[75%] h-[300] m-auto mt-28 flex justify-evenly items-center bg-white">
        <Text className="h-[40] bg-green-400 w-[180] text-center pt-2">
          Succesfull Logged in!
        </Text>
        <Pressable
          className="w-[180] bg-blue-300 h-[40] flex justify-center align-center"
          onPress={logOut}
        >
          <Text className="text-center">Log Out</Text>
        </Pressable>
      </View>
    );
  };

  const ifNotLoggIn = () => {
    return (
      <View className=" w-[75%] h-[300] m-auto mt-28 flex justify-evenly items-center bg-white">
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            height: 40,
            width: 180,
          }}
          placeholder="email"
          onChangeText={setEmail}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "grey",
            height: 40,
            width: 180,
          }}
          placeholder="password"
          onChangeText={setPassword}
        />
        <Pressable
          className="w-[180] bg-blue-300 h-[40] flex justify-center align-center"
          onPress={logIn}
        >
          <Text className="text-center">Log In</Text>
        </Pressable>
        <Pressable
          className="w-[180] bg-blue-300 h-[40] flex justify-center align-center"
          onPress={signUp}
        >
          <Text className="text-center">Sign Up</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <ImageBackground className="flex-auto" source={require("../src/bg/bg.png")}>
      {isLogInB ? ifLoggedIn() : ifNotLoggIn()}
    </ImageBackground>
  );
}
