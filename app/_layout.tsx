import useAppContext, { ContextProvider } from "@/context";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { token } = useAppContext();
  return (
    <ContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen name="(home)" />
        ) : (
          <Stack.Screen name="(auth)" />
        )}
      </Stack>
    </ContextProvider>
  );
}
