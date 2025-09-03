import { StyleSheet, Text, View } from "react-native";
import InputField from "../form/InputField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DropDown from "../form/DropDown";
import languages from "../../assets/files/languages.json";
import Button from "../Button";
import { useRouter } from "expo-router";
import useCreateNewCourse from "@/hooks/courses/useCreateNewCourse";

function CreateCourseForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      courseLang: "",
      baseLang: "",
      description: "",
    },
    mode: "onSubmit",
  });
  const { createCourse, isSuccess, error } = useCreateNewCourse();
  const route = useRouter();
  const [openCourseLang, setOpenCourseLang] = useState(false);

  const [openBaseLang, setOpenBaseLang] = useState(false);

  const [items, setItems] = useState(
    languages.map((lang) => ({
      label: lang.name,
      value: lang.code,
    }))
  );

  const onSubmit = async (data: any) => {
    await createCourse(
      data.title,
      data.courseLang,
      data.baseLang,
      data.description
    );
    if (isSuccess) {
      setTimeout(() => {
        route.navigate("/(tabs)/(courses)/user-courses");
      }, 1000);
    }
  };

  return (
    <View style={styles.formContainer}>
      <InputField
        name="title"
        label="Course name"
        placeholder="Your course name"
        control={control}
        rules={{ required: "Field required" }}
        errors={errors}
        accessibilityLabel="title"
        nativeID="title"
      />
      <DropDown
        open={openCourseLang}
        items={items}
        setOpen={setOpenCourseLang}
        setItems={setItems}
        searchable={true}
        control={control}
        rules={{ required: "Field required" }}
        name="courseLang"
        testID="courseLang"
        label="Course language"
        placeholder="Select language to learn"
      />
      <View style={styles.baseLangContainer}>
        <DropDown
          open={openBaseLang}
          items={items}
          setOpen={setOpenBaseLang}
          setItems={setItems}
          searchable={true}
          control={control}
          rules={{ required: "Field required" }}
          name="baseLang"
          testID="baseLang"
          label="Base Language"
          placeholder="Select base language"
        />
      </View>
      <InputField
        name="description"
        label="Description"
        placeholder="Describe your new course"
        multiline={true}
        numberOfLines={5}
        control={control}
        rules={{ required: "Field required" }}
        errors={errors}
        accessibilityLabel="description"
        nativeID="description"
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        text="Create the course"
        variant="primary"
        accessibilityLabel="createCourseButton"
        nativeID="createCourseButton"
      />
      {isSuccess && (
        <View style={styles.successContainer}>
          <Text style={styles.success}>Course has been created!</Text>
        </View>
      )}
    </View>
  );
}

export default CreateCourseForm;

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
