import useAppContext from "@/context";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Register() {
  const { loginPersist } = useAppContext();
  return (
    <View>
      <Text>Register</Text>
      <Link href={"/login"}>Ir para Login</Link>
      <Link href={"/(auth)"}>Voltar</Link>
    </View>
  );
}
