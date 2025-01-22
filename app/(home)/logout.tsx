import useAppContext from "@/context";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const Logout = () => {
  const router = useRouter();
  const { logoutPersist } = useAppContext();
  useEffect(() => {
    logoutPersist();
    router.replace("/(auth)");
  });
  return <View></View>;
};

export default Logout;
