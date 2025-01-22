import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { Button, ButtonText, Container, Logo, Title } from "./styled";
import useAppContext from "@/context";
import { useEffect } from "react";

export default function Index() {
  const { token } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    console.log(`${token} < token in index`);
    if (token) {
      router.replace("/(home)");
    }
  });
  return (
    <Container>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Title>Bem vindo ao IParts!</Title>
        <Logo source={require("@/assets/images/logoiparts.png")} />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: "20%",
        }}
      >
        <Button dark={true} onPressOut={() => router.push("/(auth)/login")}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Button onPressOut={() => router.push("/(auth)/register")}>
          <ButtonText dark={true}>Cadastrar-se</ButtonText>
        </Button>
      </View>
    </Container>
  );
}
