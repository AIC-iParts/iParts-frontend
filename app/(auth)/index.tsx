import useAppContext from "@/context";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { Button, ButtonText, Container, Logo, Title } from "./styled";

export default function Index() {
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
        <Button dark={true}>
          <ButtonText>
            <Link href={"/login"}>Entrar</Link>
          </ButtonText>
        </Button>
        <Button>
          <ButtonText dark={true}>
            <Link href={"/register"}>Cadastrar-se</Link>
          </ButtonText>
        </Button>
      </View>
    </Container>
  );
}
