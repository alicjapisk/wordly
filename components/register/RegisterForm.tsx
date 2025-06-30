import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";

import InputField from "../InputField";

import { PASSWORD_REGEXP } from "@/constants";
import PasswordRequirements from "./PasswordRequirements";
import useSignUp from "@/hooks/register/useSignUp";
import Button from "../Button";
import useShowPassword from "../useShowPassword";

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
    <>
      <View>
        <View>
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
        </View>
        <View>
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
        </View>
        <View className="pt-[5px]">
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
        </View>
        <View className="pl-[5px] pt-[15px]">
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
    </>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  success: {
    color: "green",
    marginTop: 12,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 12,
    fontWeight: "bold",
  },
});
