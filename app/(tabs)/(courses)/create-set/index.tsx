import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import CreateSetForm from "@/components/sets/CreateSetForm";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new set</Text>
      <View style={styles.formContainer}>
        <CreateSetForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    paddingTop: 10,
  },
});
