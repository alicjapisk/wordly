import HomeScreen from "@/components/home/HomeScreen";
import useSession from "@/hooks/useSession";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  const { session, isLoading } = useSession();

  if (!isLoading && session) {
    return <Redirect href="/user-courses" />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}
