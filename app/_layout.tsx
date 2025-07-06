import { Head, Stack } from "expo-router";

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
