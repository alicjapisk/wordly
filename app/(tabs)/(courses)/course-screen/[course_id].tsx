import Button from "@/components/Button";
import LoadingScreen from "@/components/LoadingScreen";
import MessageScreen from "@/components/MessageScreen";
import Set from "@/components/sets/Set";
import useGetCourseById from "@/hooks/courses/useGetCourseById";
import useGetSets from "@/hooks/sets/useGetSets";
import useSession from "@/hooks/useSession";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function CourseScreen() {
  const { course_id } = useLocalSearchParams();
  const router = useRouter();
  const { getSets, isLoading, error, isSuccess } = useGetSets();
  const [sets, setSets] = useState([]);
  const { session } = useSession();
  const { getCourseById, course } = useGetCourseById();

  useEffect(() => {
    if (!course_id) return;
    getCourseById(course_id);
  }, [course_id]);

  useEffect(() => {
    if (!session?.user?.id) return;
    (async () => {
      const result = await getSets();
      if (result) setSets(result);
    })();
  }, [session]);

  if (isLoading) return <LoadingScreen />;

  return (
    <View style={styles.container}>
      <Text style={styles?.title}>{course?.title}</Text>
      <Text>{course?.description}</Text>
      <View style={styles.setContainer}>
        {sets.length === 0 ? (
          <MessageScreen text="No sets yet. Create your first one to start learning!" />
        ) : (
          <FlatList
            data={sets}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Set data={item} />}
            numColumns={2}
            horizontal={false}
          />
        )}
      </View>
      <Button
        text="Create set"
        onPress={() =>
          router.push({
            pathname: "/(tabs)/(courses)/create-set",
            params: { course_id: course_id },
          })
        }
        variant="primary"
        accessibilityLabel="createSetButton"
        nativeID="createSetButton"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  setContainer: {
    flex: 1,
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    paddingBottom: 10,
  },
});
