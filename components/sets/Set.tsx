import { Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import { useRouter } from "expo-router";

export default function Set({ data }) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push("/")} style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#edeae8",
    backgroundColor: "white",
  },

  title: {
    color: "#FF7617",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
