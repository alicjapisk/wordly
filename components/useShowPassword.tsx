import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable } from "react-native";

export default function useShowPassword() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const toggleEye = () => {
    return (
      <Pressable accessibilityRole="button" onPress={togglePasswordVisibility}>
        <Feather
          name={isPasswordHidden ? "eye-off" : "eye"}
          size={16}
          color="#1D1D1D"
        />
      </Pressable>
    );
  };
  return { toggleEye, isPasswordHidden };
}
