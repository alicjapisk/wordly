import { FlatList, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import { Text, View } from "@/components/Themed";
import useGetCourses from "@/hooks/courses/useGetCourses";
import Course from "@/components/courses/Course";
import LoadingScreen from "@/components/LoadingScreen";
import useSession from "@/hooks/useSession";
import MessageScreen from "@/components/MessageScreen";

export default function UserCourses() {
  const { getCourses, isLoading, error, isSuccess } = useGetCourses();
  const [courses, setCourses] = useState([]);
  const { session } = useSession();

  useEffect(() => {
    if (!session?.user?.id) return;

    (async () => {
      const result = await getCourses();
      if (result) setCourses(result);
    })();
  }, [session]);

  if (isLoading) return <LoadingScreen />;

  return (
    <View style={styles.container}>
      {courses.length === 0 ? (
        <MessageScreen text="No courses yet. Create your first one to start learning!" />
      ) : (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Text style={styles.title}>Courses</Text>}
          renderItem={({ item }) => <Course data={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
