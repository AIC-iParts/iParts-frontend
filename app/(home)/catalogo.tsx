import useAppContext from "@/context";
import { Text, View } from "react-native";

const Catalogo = () => {
  const { user, token } = useAppContext();
  return (
    <View>
      <Text>
        Catalogo {user} seu token é:
        {token}
      </Text>
    </View>
  );
};

export default Catalogo;
