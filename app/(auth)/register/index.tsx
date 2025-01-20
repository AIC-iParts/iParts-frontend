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

export default function RegisterBasic() {
  const router = useRouter();
  const { registerData, updateRegisterData } = useAppContext();
  const [nome, setNome] = useState<string>(
    registerData?.name ? registerData.name : ""
  );
  const [email, setEmail] = useState<string>(
    registerData?.email ? registerData.email : ""
  );
  const [cnpj, setCnpj] = useState<string>(
    registerData?.cnpj ? registerData.cnpj : ""
  );
  const [aniversario, setAniversario] = useState<string>(
    registerData?.fundation_date ? registerData.fundation_date : ""
  );
  const [telefone, setTelefone] = useState<string>(
    registerData?.phone ? registerData.phone : ""
  );

  const handleNextPage = () => {
    updateRegisterData({
      name: nome,
      email: email,
      cnpj: cnpj,
      fundation_date: aniversario,
      phone: telefone,
    });
    router.push("/register/address");
  };

  return (
    <Container>
      <Section flex={1}>
        <Title>Cadastro</Title>
      </Section>
      <SemiTitle>Dados básicos</SemiTitle>
      <Line></Line>
      <Input
        placeholder="Nome da loja"
        placeholderTextColor={Colors.placeholder}
        value={nome}
        onChangeText={(props: string) => setNome(props)}
      />
      <Input
        placeholder="Email"
        placeholderTextColor={Colors.placeholder}
        value={email}
        onChangeText={(props: string) => setEmail(props)}
      />
      <Input
        placeholder="CNPJ"
        placeholderTextColor={Colors.placeholder}
        value={cnpj}
        onChangeText={(props: string) => setCnpj(props)}
      />
      <Input
        placeholder="Aniversario"
        placeholderTextColor={Colors.placeholder}
        value={aniversario}
        onChangeText={(props: string) => setAniversario(props)}
      />
      <Input
        placeholder="Telefone"
        placeholderTextColor={Colors.placeholder}
        value={telefone}
        onChangeText={(props: string) => setTelefone(props)}
      />
      <Section flex={1}>
        <Button dark={true} onPressOut={handleNextPage}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </Section>
    </Container>
  );
}
