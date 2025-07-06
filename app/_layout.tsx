import { Stack } from "expo-router";
import Head from "expo-router/head";

export default function RootLayout() {
  return (
    <Stack>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
