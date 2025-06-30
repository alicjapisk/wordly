import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import InputField from "../InputField";

import { PASSWORD_REGEXP } from "@/constants";
import PasswordRequirements from "./PasswordRequirements";
import useSignUp from "@/hooks/register/useSignUp";
import Button from "../Button";
import useShowPassword from "../useShowPassword";
import useIsWeb from "@/hooks/useIsWeb";

const RegisterForm = () => {
  const { handleSignUp, isSuccess, error } = useSignUp();
  const { toggleEye, isPasswordHidden } = useShowPassword();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      isRegulationsAccepted: false,
      isAgeRegulationsAccepted: false,
      country: null,
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: any) => {
    await handleSignUp(data.email, data.password);
  };

  const password = watch("password") || "";

  const isCharValid = useMemo(() => password.length >= 8, [password]);
  const isBigLetterValid = useMemo(() => /[A-Z]/.test(password), [password]);
  const isNumberValid = useMemo(() => /\d/.test(password), [password]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.formContainer}>
          <InputField
            name="email"
            control={control}
            rules={{
              required: "Field required",
              // pattern: {
              //   value: EMAIL_REGEXP,
              //   message: t("error_email_accuracy"),
              // },
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
            rules={{
              required: "Field required",
              pattern: {
                value: PASSWORD_REGEXP,
                message: "Invalid password",
              },
            }}
            errors={errors}
            placeholder="Password"
            label="Password"
            isPasswordHidden={isPasswordHidden}
            toggleEye={toggleEye}
            errorMessage={errors.password?.message}
            accessibilityLabel="passwordInput"
            nativeID="passwordInput"
          />

          <InputField
            name="confirmPassword"
            control={control}
            rules={{
              required: "Field required",
              validate: (value) =>
                value === watch("password") || "Passwords don't match",
            }}
            errors={errors}
            placeholder="Password"
            label="Confirm password"
            isPasswordHidden={isPasswordHidden}
            toggleEye={toggleEye}
            errorMessage={errors.confirmPassword?.message}
            accessibilityLabel="confirmPasswordInput"
            nativeID="confirmPasswordInput"
          />
          <PasswordRequirements
            isCharValid={isCharValid}
            isBigLetterValid={isBigLetterValid}
            isNumberValid={isNumberValid}
          />
        </View>

        <Button
          text="Sign up"
          onPress={handleSubmit(onSubmit)}
          variant="primary"
          accessibilityLabel="registerButton"
          nativeID="registerButton"
        />
      </View>
      {isSuccess && (
        <Text style={styles.success}>Success! Please check your email.</Text>
      )}
      {error && <Text style={styles.error}>Error: {error}</Text>}
    </SafeAreaView>
  );
};

export default RegisterForm;

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
  success: {
    color: "green",
    marginTop: 12,
    fontWeight: "bold",
  },
});
