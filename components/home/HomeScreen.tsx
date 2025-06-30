import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import useIsWeb from "@/hooks/useIsWeb";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/fox.png")}
          style={{ height: 300, width: 300 }}
        />
        <Text style={styles.title}>
          Welcome to the world of words! Learn new vocabulary and have fun.
        </Text>
        <View style={styles.buttonsContainer}>
          <Button
            text="Login"
            onPress={() => router.navigate("/login")}
            variant="primary"
            accessibilityLabel="goToLoginButton"
            nativeID="goToLoginButton"
          />
          <Button
            text="Register"
            onPress={() => router.navigate("/register")}
            variant="secondary"
            accessibilityLabel="goToRegisterButton"
            nativeID="goToRegisterButton"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const isWeb = useIsWeb();

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  container: {
    width: isWeb ? "20%" : "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF7617",
    paddingBottom: 10,
  },

  buttonsContainer: {
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: 10,
    gap: 10,
  },
});
