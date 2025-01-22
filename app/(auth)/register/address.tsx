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

export default function RegisterAddress() {
  const router = useRouter();
  const { registerData, updateRegisterData } = useAppContext();
  const [cep, setCep] = useState<string>(
    registerData?.cep ? registerData.cep : ""
  );
  const [cidade, setCidade] = useState<string>(
    registerData?.city_name ? registerData.city_name : ""
  );
  const [estado, setEstado] = useState<string>(
    registerData?.state_code ? registerData.state_code : ""
  );
  const [pais, setPais] = useState<string>("");
  const [rua, setRua] = useState<string>(
    registerData?.street ? registerData.street : ""
  );
  const [numero, setNumero] = useState<string>(
    registerData?.address_number ? registerData.address_number : ""
  );

  const handleNextPage = () => {
    updateRegisterData({
      cep: cep,
      street: rua,
      address_number: numero,
      city_name: cidade,
      state_code: estado,
    });
    router.push("/register/password");
  };

  return (
    <Container>
      <Section flex={1}>
        <Title>Cadastro</Title>
      </Section>
      <SemiTitle>Endereço</SemiTitle>
      <Line></Line>
      <Input
        placeholder="CEP"
        placeholderTextColor={Colors.placeholder}
        value={cep}
        onChangeText={(props: string) => setCep(props)}
      />
      <Input
        placeholder="Cidade"
        placeholderTextColor={Colors.placeholder}
        value={cidade}
        onChangeText={(props: string) => setCidade(props)}
      />
      <Input
        placeholder="Estado"
        placeholderTextColor={Colors.placeholder}
        value={estado}
        onChangeText={(props: string) => setEstado(props)}
      />
      <Input
        placeholder="Pais"
        placeholderTextColor={Colors.placeholder}
        value={pais}
        onChangeText={(props: string) => setPais(props)}
      />
      <Input
        placeholder="Rua"
        placeholderTextColor={Colors.placeholder}
        value={rua}
        onChangeText={(props: string) => setRua(props)}
      />
      <Input
        placeholder="Numero"
        placeholderTextColor={Colors.placeholder}
        value={numero}
        onChangeText={(props: string) => setNumero(props)}
      />
      <Section flex={1}>
        <Button dark={true} onPressOut={handleNextPage}>
          <ButtonText>Próximo</ButtonText>
        </Button>
      </Section>
    </Container>
  );
}
