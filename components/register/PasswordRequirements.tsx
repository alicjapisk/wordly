import Entypo from "@expo/vector-icons/Entypo";
import { StyleSheet, Text, View } from "react-native";

interface PasswordRequirementsProps {
  isCharValid: boolean;
  isBigLetterValid: boolean;
  isNumberValid: boolean;
}
const PasswordRequirements = ({
  isCharValid,
  isBigLetterValid,
  isNumberValid,
}: PasswordRequirementsProps) => {
  return (
    <View style={style.container}>
      <Text style={{ color: isCharValid ? "green" : "black" }}>
        Min. 8 characters
      </Text>
      <Entypo name="dot-single" size={14} color="#FF7617" />
      <Text style={{ color: isBigLetterValid ? "green" : "black" }}>
        One capital letter
      </Text>
      <Entypo name="dot-single" size={14} color="#FF7617" />
      <Text style={{ color: isNumberValid ? "green" : "black" }}>
        One digit
      </Text>
    </View>
  );
};

export default PasswordRequirements;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
