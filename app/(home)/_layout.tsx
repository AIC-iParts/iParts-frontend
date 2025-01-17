import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MenuBar from "@/components/menubar";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: (props) => <MenuBar {...props} />,
          drawerStyle: { backgroundColor: "red" },
          drawerLabelStyle: { backgroundColor: "green" },
          drawerItemStyle: { backgroundColor: "gray" },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
