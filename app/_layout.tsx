import useAppContext, { ContextProvider } from "@/context";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { token } = useAppContext();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <ContextProvider>
        {token ? (
          <Stack.Screen name="(home)" />
        ) : (
          <Stack.Screen name="(auth)" />
        )}
      </ContextProvider>
    </Stack>
  );
}
