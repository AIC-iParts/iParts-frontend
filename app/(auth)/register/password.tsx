import useAppContext from "@/context";
import { useRouter } from "expo-router";
import {
  Button,
  ButtonText,
  Container,
  Input,
  Line,
  Section,
  SemiTitle,
  Title,
} from "../styled";
import Colors from "@/constants/colors";
import { useState } from "react";
import { RegisterRequest } from "@/requests/register.request";

export default function RegisterPassword() {
  const router = useRouter();
  const { registerData, updateRegisterData, loginPersist } = useAppContext();
  const [senha, setSenha] = useState<string>(
    registerData?.password ? registerData.password : ""
  );
  const [confirmSenha, setConfirmSenha] = useState<string>(
    registerData?.confirmPassword ? registerData.confirmPassword : ""
  );

  const onRegister = async () => {
    updateRegisterData({ password: senha, confirmPassword: confirmSenha });
    try {
      console.log("Debug 1");
      const request = await RegisterRequest(registerData);
      if (request?.accessToken) {
        console.log("Debug 2");
        loginPersist(request?.name, request?.accessToken);
        router.replace("/(home)");
      } else {
        console.log("Debug 3");
        console.log("Erro ao registrar, token não recebido.");
      }
    } catch (error: any) {
      console.log("Debug 4");
      console.log(`Erro na requisição. onRegister. Erro:\n${error}`);
    }
  };

  return (
    <Container>
      <Section flex={1}>
        <Title>Cadastro</Title>
      </Section>
      <SemiTitle>Crie uma senha</SemiTitle>
      <Line></Line>
      <Input
        placeholder="Senha"
        placeholderTextColor={Colors.placeholder}
        value={senha}
        secureTextEntry={true}
        onChangeText={(props: string) => setSenha(props)}
      />
      <Input
        placeholder="Confirme a senha"
        placeholderTextColor={Colors.placeholder}
        value={confirmSenha}
        secureTextEntry={true}
        onChangeText={(props: string) => setConfirmSenha(props)}
      />
      <Section flex={1}>
        <Button dark={true} onPressOut={onRegister}>
          <ButtonText>Cadastrar-se</ButtonText>
        </Button>
      </Section>
    </Container>
  );
}
