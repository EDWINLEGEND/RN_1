import { Text, View, StyleSheet, Button } from "react-native";
import { Image } from "expo-image";
export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
