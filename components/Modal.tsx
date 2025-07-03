import {
  Alert,
  Pressable,
  Modal as RnModal,
  StyleSheet,
  Text,
} from "react-native";
import { View } from "./Themed";
import Entypo from "@expo/vector-icons/Entypo";

interface ModalProps {
  title: string;
  content: string | React.ReactNode;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}
export default function Modal({
  title,
  content,
  modalVisible,
  setModalVisible,
}: ModalProps) {
  return (
    <RnModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.titleView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Entypo name="cross" size={24} color="#FF7617" />
            </Pressable>
          </View>
          <View>{content}</View>
        </View>
      </View>
    </RnModal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  titleView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTitle: {
    marginBottom: 15,
    color: "#FF7617",
    fontSize: 16,
    fontWeight: 600,
  },
});
