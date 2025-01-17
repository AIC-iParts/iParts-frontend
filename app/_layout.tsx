import useAppContext, { ContextProvider } from "@/context";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { token } = useAppContext();
  const auth = token ? true : false;
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <ContextProvider>
        {auth ? <Stack.Screen name="(home)" /> : <Stack.Screen name="(auth)" />}
      </ContextProvider>
    </Stack>
  );
}
