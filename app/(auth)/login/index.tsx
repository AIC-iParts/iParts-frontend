import useAppContext from "@/context";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { Button, ButtonText, Container, Input, Logo, Title } from "../styled";

export default function Login() {
  return (
    <Container>
      <Logo source={require("@/assets/images/logoiparts.png")} />
      <Title>Login</Title>
      <Input placeholder="CNPJ" />
      <Button dark={true}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
