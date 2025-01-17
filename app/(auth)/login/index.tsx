import useAppContext from "@/context";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  const { loginPersist } = useAppContext();
  return (
    <View>
      <Text>Login</Text>
      <Link href={"/register"}>Ir para Register</Link>
      <Link href={"/(auth)"}>Voltar</Link>
    </View>
  );
}
