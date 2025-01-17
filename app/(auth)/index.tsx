import useAppContext from "@/context";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text></Text>
      <Link href={"/register"}>Ir para Register</Link>
      <Link href={"/login"}>Ir para Login</Link>
    </View>
  );
}
