import { Text, View, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Hello World </Text>
      <Image
        source={{
          uri: "https://media1.tenor.com/m/fQakS_QTUEwAAAAC/zayneeeeeeelads.png"
        }}
        style={styles.image}
      />
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
