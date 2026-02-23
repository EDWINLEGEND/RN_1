import { Text, View, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
export default function About() {
    return (
        <View style={styles.container}>

            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button title="Login" />
            <ActivityIndicator />
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
