import { Stack } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="course-screen/[course_id]" />
      <Stack.Screen name="user-courses/index" />
    </Stack>
  );
}
