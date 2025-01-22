import useAppContext from "@/context";
import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import {
  Body,
  CardPedido,
  CardVenda,
  Container,
  Line,
  TextDetails,
  TextExtraBoldPrice,
  TextNormal,
  TextPrice,
  TextSmall,
  Title,
} from "./styles/home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Home = () => {
  const { user, token } = useAppContext();
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Capô Modelo Volkswagen",
      preco: "R$ 500,00",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Cabeçote e junta",
      preco: "R$ 530,00",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Porta pálio weekend",
      preco: "R$ 1640,00",
    },
    {
      id: "58694a0f-3da12-471f-bd96-145571e29d72",
      title: "Correia dentada celta",
      preco: "R$ 800,00",
    },
    {
      id: "58694a0f-3da1-471f-bd296-145571e29d72",
      title: "Rodas bbs",
      preco: "R$ 2600,00",
    },
    {
      id: "58694a0f-3da1-471f-bd926-1455571e29d72",
      title: "Parabrisa de ecosport",
      preco: "R$ 1200,00",
    },
  ];

  type ItemProps = { title: string; id?: string; preco: string };
  const Pedido = (item: ItemProps) => (
    <CardPedido>
      <TextSmall>{item?.title}</TextSmall>
      <TextPrice>{item?.preco}</TextPrice>
      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TextDetails>Ver detalhes </TextDetails>
        <MaterialIcons name="remove-red-eye" size={15} color={Colors.white} />
      </View>
    </CardPedido>
  );

  const Venda = (item: ItemProps) => (
    <CardVenda>
      <Text>{item?.title}</Text>
    </CardVenda>
  );

  return (
    <Body>
      <Container>
        <Title>Painel</Title>
        <Line />
        <TextNormal>Pedidos</TextNormal>
        <SafeAreaProvider>
          <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={(item) => (
                <Pedido title={item?.item?.title} preco={item?.item?.preco} />
              )}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </SafeAreaView>
        </SafeAreaProvider>
        <TextNormal>Valor total em vendas hoje</TextNormal>
        <TextExtraBoldPrice>R$ 0,00</TextExtraBoldPrice>
        <TextSmall style={{ margin: 10 }}>Média semanal: R$ 2.223,00</TextSmall>
        <TextNormal>Vendas recentes</TextNormal>
        <SafeAreaProvider>
          <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={(item) => (
                <Venda title={item?.item?.title} preco={item?.item?.preco} />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </Container>
    </Body>
  );
};

export default Home;
