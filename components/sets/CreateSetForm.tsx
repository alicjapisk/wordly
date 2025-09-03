import { StyleSheet, Text, View } from "react-native";
import InputField from "../form/InputField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DropDown from "../form/DropDown";
import languages from "../../assets/files/languages.json";
import Button from "../Button";
import { useRouter } from "expo-router";
import useCreateNewCourse from "@/hooks/courses/useCreateNewCourse";
import useCreateNewSet from "@/hooks/sets/useCreateNewSet";

function CreateSetForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "onSubmit",
  });
  const { createSet, isSuccess, error } = useCreateNewSet();
  const route = useRouter();

  const onSubmit = async (data: any) => {
    await createSet(data.title);
    if (isSuccess) {
      setTimeout(() => {
        route.back();
      }, 1000);
    }
  };

  return (
    <View style={styles.formContainer}>
      <InputField
        name="title"
        label="Set name"
        placeholder="Your set name"
        control={control}
        rules={{ required: "Field required" }}
        errors={errors}
        accessibilityLabel="title"
        nativeID="title"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        text="Create the set"
        variant="primary"
        accessibilityLabel="createSetButton"
        nativeID="createSetButton"
      />
      {isSuccess && (
        <View style={styles.successContainer}>
          <Text style={styles.success}>Set has been created!</Text>
        </View>
      )}
    </View>
  );
}

export default CreateSetForm;

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  baseLangContainer: {
    zIndex: 10,
  },
  success: {
    color: "black",
    fontSize: 13,
  },
  successContainer: {
    marginTop: 4,
    backgroundColor: "#cef2db",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
