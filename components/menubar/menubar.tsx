import { DrawerHeaderProps } from "@react-navigation/drawer";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function MenuBar({ navigation }: DrawerHeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={navigation.openDrawer}>
                <Text style={styles.menuText}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Meu App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        backgroundColor: '#000E22',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    menuText: {
        color: '#FAFAFB',
        fontSize: 24,
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});