import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function MessageScreen({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#FF7617",
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
});
