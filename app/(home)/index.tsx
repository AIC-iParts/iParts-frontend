import useAppContext from "@/context";
import { Text, View } from "react-native";

const Home = () => {
  const { user } = useAppContext();
  return (
    <View>
      <Text>Eai {user}</Text>
    </View>
  );
};

export default Home;
