import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  variant: "primary" | "secondary";
}

export default function Button({ text, onPress, variant }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={containerStyles[variant]}>
      <Text style={textStyles[variant]}>{text}</Text>
    </Pressable>
  );
}

const containerStyles = StyleSheet.create({
  primary: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 6,
  },
  secondary: {
    backgroundColor: "yellow",
    padding: 12,
    borderRadius: 6,
  },
});

const textStyles = StyleSheet.create({
  primary: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  secondary: {
    color: "black",
    textAlign: "center",
  },
});
