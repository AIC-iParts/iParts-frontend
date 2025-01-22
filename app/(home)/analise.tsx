import useAppContext from "@/context";
import { Text, View } from "react-native";

const Analise = () => {
  const { user, token } = useAppContext();
  return (
    <View>
      <Text>
        Analise {user} seu token é:
        {token}
      </Text>
    </View>
  );
};

export default Analise;
