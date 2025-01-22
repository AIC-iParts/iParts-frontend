import useAppContext from "@/context";
import { Text, View } from "react-native";

const Home = () => {
  const { user, token } = useAppContext();
  return (
    <View>
      <Text>
        Eai {user} seu token é:
        {token}
      </Text>
    </View>
  );
};

export default Home;
