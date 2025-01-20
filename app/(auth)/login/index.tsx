import useAppContext from "@/context";
import {
  Button,
  ButtonText,
  Container,
  Input,
  Logo,
  Section,
  TextSmall,
  Title,
} from "../styled";
import Colors from "@/constants/colors";
import { LoginRequest } from "@/requests/login.request";
import { useState } from "react";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const { loginPersist } = useAppContext();
  const [cnpj, setCnpj] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const onLogin = async () => {
    try {
      console.log("Debug 1");
      const request = await LoginRequest(cnpj, password);
      if (request?.token) {
        console.log("Debug 2");
        loginPersist(request?.user, request?.token);
        router.replace("/(home)");
      } else {
        console.log("Debug 3");
        console.log("Erro ao logar, token não recebido.");
      }
    } catch (error: any) {
      console.log("Debug 4");
      console.log(`Erro na requisição. onLogin. Erro:\n${error}`);
    }
  };

  return (
    <Container>
      <Section flex={0.4}>
        <Logo source={require("@/assets/images/logoiparts.png")} />
        <Title>Login</Title>
      </Section>
      <Section flex={0.3}>
        <Input
          placeholder="CNPJ"
          placeholderTextColor={Colors.placeholder}
          value={cnpj}
          onChangeText={(props: string) => setCnpj(props)}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor={Colors.placeholder}
          value={password}
          secureTextEntry={true}
          onChangeText={(props: string) => setPassword(props)}
        />
      </Section>

      <Section flex={0.3} justify_content="normal">
        <Button dark={true} onPressOut={() => onLogin()}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <TextSmall>Esqueceu sua senha?</TextSmall>
        <TextSmall>
          Não tem conta?{" "}
          <Link
            href={"/register"}
            style={{
              textDecorationLine: "underline",
            }}
          >
            Cadastrar-se
          </Link>
        </TextSmall>
      </Section>
    </Container>
  );
}
