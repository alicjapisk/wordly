import { StyleSheet, View } from "react-native";
import InputField from "../form/InputField";
import { useForm } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import DropDown from "../form/DropDown";
import languages from "../../assets/files/languages.json";
import Button from "../Button";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
function CreateCourseForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      courseName: "",
      courseLang: "",
      baseLang: "",
      description: "",
    },
    mode: "onSubmit",
  });
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
    route.navigate("/(tabs)/(create-course)/create-card");
  };

  return (
    <View style={styles.formContainer}>
      <InputField
        name="courseName"
        label="Course name"
        placeholder="Your course name"
        control={control}
        rules={{ required: "Field required" }}
        errors={errors}
        accessibilityLabel="courseName"
        nativeID="courseName"
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
});
