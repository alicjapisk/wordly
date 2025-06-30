import useIsWeb from "@/hooks/useIsWeb";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  variant: "primary" | "secondary";
  accessibilityLabel: string;
  nativeID: string;
}

export default function Button({
  text,
  onPress,
  variant,
  accessibilityLabel,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={containerStyles[variant]}
      accessibilityLabel={accessibilityLabel}
      nativeID={accessibilityLabel}
    >
      <Text style={textStyles[variant]}>{text}</Text>
    </Pressable>
  );
}

const containerStyles = StyleSheet.create({
  primary: {
    backgroundColor: "#FF7617",
    padding: 12,
    borderRadius: 20,
    width: "100%",
  },
  secondary: {
    backgroundColor: "#FAFAFA",
    padding: 12,
    borderRadius: 20,
    borderColor: "#FF7617",
    borderWidth: 2,
    width: "100%",
  },
});

const textStyles = StyleSheet.create({
  primary: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  secondary: {
    color: "#FF7617",
    textAlign: "center",
    fontWeight: "600",
  },
});
