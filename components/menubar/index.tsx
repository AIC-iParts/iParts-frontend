import { DrawerHeaderProps } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { Container, Icon, Title } from "./styled";

export default function MenuBar({ navigation }: DrawerHeaderProps) {
  return (
    <Container>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Icon>☰</Icon>
      </TouchableOpacity>
      <Title>Meu App</Title>
    </Container>
  );
}
