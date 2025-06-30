import React from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import InputField from "../InputField";

import useShowPassword from "../useShowPassword";
import Button from "../Button";
import { useLogin } from "@/hooks/login/useLogin";
import useIsWeb from "@/hooks/useIsWeb";

export default function LoginForm() {
  const { error, isLoading, handleLogin } = useLogin();
  const { toggleEye, isPasswordHidden } = useShowPassword();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: any) => {
    await handleLogin(data.email, data.password);
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <InputField
            name="email"
            control={control}
            rules={{
              required: "Field required",
              // pattern: {
              //   value: EMAIL_REGEXP,
              //   message: t("error_email_accuracy")
              // }
            }}
            errors={errors}
            placeholder="email@email.com"
            label="Address email"
            isPasswordHidden={false}
            errorMessage={errors.email?.message}
            accessibilityLabel="emailInput"
            nativeID="emailInput"
          />
          <InputField
            name="password"
            control={control}
            rules={{ required: "Field required" }}
            errors={errors}
            placeholder="password"
            label="Password"
            isPasswordHidden={isPasswordHidden}
            toggleEye={toggleEye}
            errorMessage={errors.password?.message}
            accessibilityLabel="passwordInput"
            nativeID="passwordInput"
          />
        </View>
        <Button
          text={isLoading ? "Loading..." : "Login"}
          onPress={handleSubmit(onSubmit)}
          variant="primary"
          accessibilityLabel="loginButton"
          nativeID="loginButton"
        />
        {error && <Text style={styles.error}>Error: {error}</Text>}
      </View>
    </SafeAreaView>
  );
}
const isWeb = useIsWeb();
const styles = StyleSheet.create({
  safeAreaViewContainer: {
    alignItems: "center",
    justifyContent: isWeb && "center",
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  container: {
    width: isWeb ? "20%" : "100%",
    borderWidth: isWeb && 2,
    borderColor: isWeb && "#FF7617",
    borderRadius: isWeb && 20,
    padding: isWeb && 20,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  formContainer: {
    gap: 20,
    paddingBottom: 50,
  },
  error: {
    color: "red",
    marginTop: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF7617",
    paddingBottom: 10,
  },
});
