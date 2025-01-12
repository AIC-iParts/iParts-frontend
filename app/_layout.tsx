import { Stack } from 'expo-router';

export default function RootLayout() {
  const auth = false
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {auth ?
        <Stack.Screen name="(home)" />
        :
        <Stack.Screen name="(auth)" />
      }
    </Stack>
  );
}
