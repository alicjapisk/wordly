import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import InputField from "../InputField";

import useShowPassword from "../useShowPassword";
import Button from "../Button";
import { useLogin } from "@/hooks/login/useLogin";

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
    <View>
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
        testID="emailInput"
      />
      <InputField
        name="password"
        control={control}
        rules={{ required: "Field required" }}
        errors={errors}
        placeholder="Password"
        label="Password"
        isPasswordHidden={isPasswordHidden}
        toggleEye={toggleEye}
        errorMessage={errors.password?.message}
        accessibilityLabel="passwordInput"
        testID="passwordInput"
      />
      <Button
        text={isLoading ? "Loading..." : "Login"}
        onPress={handleSubmit(onSubmit)}
        variant="primary"
        accessibilityLabel="loginButton"
        testId="loginButton"
      />
      {error && <Text style={styles.error}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: 12,
    fontWeight: "bold",
  },
});
