import { Platform } from "react-native";

export default function useIsWeb() {
  const isWeb = Platform.OS === "web";
  return isWeb;
}
