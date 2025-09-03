import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import { useRouter } from "expo-router";

export default function Course({ data }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text>{data.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() =>
            router.push({
              pathname: `/(tabs)/(courses)/course-screen/${data.id}`,
            })
          }
          variant="primary"
          text="Show"
          accessibilityLabel="showCourseButton"
          nativeID="showCourseButton"
        />
      </View>
    </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    color: "#FF7617",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    width: "60%",
  },
  buttonContainer: {
    width: "40%",
  },
});
