import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";

export default function Account() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Button
        onPress={() => {
          supabase.auth.signOut();
          router.push("/");
        }}
        text="Logout"
        variant="primary"
        accessibilityLabel="logoutButton"
        nativeID="logoutButton"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
