import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MenuBar from "@/components/menubar";
import Colors from "@/constants/colors";
import ButtonScreenDrawer from "@/components/buttonscreendrawer";
import { Text, View } from "react-native";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: (props) => <MenuBar {...props} />,
          drawerContentContainerStyle: { backgroundColor: Colors.background },
          drawerActiveBackgroundColor: Colors.background,
          drawerActiveTintColor: Colors.background,
          drawerStyle: { backgroundColor: Colors?.background },
          drawerItemStyle: {
            borderRadius: 0,
            borderBottomColor: Colors.white,
            borderBottomWidth: 1,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerIcon: (props) => <View />,
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Painel"} {...props} />
            ),
            title: "Painel",
          }}
        />
        <Drawer.Screen
          name="pedidos"
          options={{
            drawerIcon: (props) => <Text>Icon</Text>,
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Pedidos"} {...props} />
            ),
            title: "Pedidos",
          }}
        />
        <Drawer.Screen
          name="vendas"
          options={{
            drawerIcon: (props) => <Text>Icon</Text>,
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Vendas"} {...props} />
            ),
            title: "Vendas",
          }}
        />
        <Drawer.Screen
          name="analise"
          options={{
            drawerIcon: (props) => <Text>Icon</Text>,
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Análise"} {...props} />
            ),
            title: "Análise",
          }}
        />
        <Drawer.Screen
          name="perfil"
          options={{
            drawerIcon: (props) => <Text>Icon</Text>,
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Perfil"} {...props} />
            ),
            title: "Perfil",
          }}
        />
        <Drawer.Screen
          name="catalogo"
          options={{
            drawerIcon: (props) => <Text>Icon</Text>,
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Catálogo"} {...props} />
            ),
            title: "Catálogo",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
