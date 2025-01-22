import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import MenuBar from "@/components/menubar";
import Colors from "@/constants/colors";
import ButtonScreenDrawer from "@/components/buttonscreendrawer";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

export default function HomeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          header: (props) => <MenuBar {...props} />,
          drawerContentContainerStyle: { backgroundColor: Colors.menubar },
          drawerActiveBackgroundColor: Colors.menubar,
          drawerActiveTintColor: Colors.menubar,
          drawerStyle: { backgroundColor: Colors?.menubar },
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
            drawerIcon: (props) => (
              <Ionicons
                name="home"
                size={props?.size}
                color={props?.focused ? Colors.bluelight : Colors.white}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Painel"} {...props} />
            ),
            title: "Painel",
          }}
        />
        <Drawer.Screen
          name="pedidos"
          options={{
            drawerIcon: (props) => (
              <Ionicons
                name="cart"
                size={props?.size}
                color={props?.focused ? Colors.bluelight : Colors.white}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Pedidos"} {...props} />
            ),
            title: "Pedidos",
          }}
        />
        <Drawer.Screen
          name="vendas"
          options={{
            drawerIcon: (props) => (
              <FontAwesome6
                name="money-check-dollar"
                size={props?.size}
                color={props?.focused ? Colors.bluelight : Colors.white}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Vendas"} {...props} />
            ),
            title: "Vendas",
          }}
        />
        <Drawer.Screen
          name="analise"
          options={{
            drawerIcon: (props) => (
              <Entypo
                name="area-graph"
                size={props?.size}
                color={props?.focused ? Colors.bluelight : Colors.white}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Análise"} {...props} />
            ),
            title: "Análise",
          }}
        />
        <Drawer.Screen
          name="perfil"
          options={{
            drawerIcon: (props) => (
              <Ionicons
                name="person"
                size={props?.size}
                color={props?.focused ? Colors.bluelight : Colors.white}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Perfil"} {...props} />
            ),
            title: "Perfil",
          }}
        />
        <Drawer.Screen
          name="catalogo"
          options={{
            drawerIcon: (props) => (
              <Feather
                name="shopping-bag"
                size={props?.size}
                color={props?.focused ? Colors.bluelight : Colors.white}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Catálogo"} {...props} />
            ),
            title: "Catálogo",
          }}
        />
        <Drawer.Screen
          name="logout"
          options={{
            drawerIcon: (props) => (
              <Ionicons
                name="exit-outline"
                size={props?.size}
                color={Colors.red}
              />
            ),
            drawerLabel: (props) => (
              <ButtonScreenDrawer title={"Logout"} {...props} />
            ),
            title: "Logout",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
