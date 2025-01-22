import useAppContext from "@/context";
import { Text, View } from "react-native";

const Perfil = () => {
  const { user, token } = useAppContext();
  return (
    <View>
      <Text>
        Perfil {user} seu token é:
        {token}
      </Text>
    </View>
  );
};

export default Perfil;
