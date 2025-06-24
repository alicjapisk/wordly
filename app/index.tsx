import HomeScreen from "@/components/home/HomeScreen";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}
