import useAppContext from "@/context";
import { Text, View } from "react-native";

const Vendas = () => {
  const { user, token } = useAppContext();
  return (
    <View>
      <Text>
        Vendas {user} seu token é:
        {token}
      </Text>
    </View>
  );
};

export default Vendas;
