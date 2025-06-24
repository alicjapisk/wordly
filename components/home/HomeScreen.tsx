import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome to the world of words! Learn new vocabulary and have fun.
      </Text>
      <View style={styles.buttonsContainer}>
        <Button
          text="Login"
          onPress={() => router.navigate("/login")}
          variant="primary"
        />
        <Pressable>
          <Button
            text="Register"
            onPress={() => router.navigate("/register")}
            variant="secondary"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingTop: 10,
  },
});
