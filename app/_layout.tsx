import useAppContext, { ContextProvider } from "@/context";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const { token } = useAppContext();
  useEffect(() => {
    console.log(`${token} < token`);
  });
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
