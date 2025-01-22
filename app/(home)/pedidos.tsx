import useAppContext from "@/context";
import { Text, View } from "react-native";

const Pedidos = () => {
  const { user, token } = useAppContext();
  return (
    <View>
      <Text>
        Pedidos {user} seu token é:
        {token}
      </Text>
    </View>
  );
};

export default Pedidos;
