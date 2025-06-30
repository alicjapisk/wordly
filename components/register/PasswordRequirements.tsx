import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";

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
    <View className="flex flex-row items-center gap-[5px]">
      <Text className={isCharValid ? "text-green" : "text-white"}>
        Min. 8 characters
      </Text>
      <Entypo name="dot-single" size={14} color="#F9F02D" />
      <Text className={isBigLetterValid ? "text-green" : "text-white"}>
        One capital letter
      </Text>
      <Entypo name="dot-single" size={14} color="#F9F02D" />
      <Text className={isNumberValid ? "text-green" : "text-white"}>
        One digit
      </Text>
    </View>
  );
};

export default PasswordRequirements;
