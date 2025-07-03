import useResetPassword from "@/hooks/login/useResetPassword";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import InputField from "../InputField";
import Button from "../Button";

export default function ForgotPasswordContent() {
  const { resetPassword, isLoading, error, isSuccess, setSuccess, setError } =
    useResetPassword();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    resetPassword(data.email);
  };
  return (
    <View>
      <Text style={styles.text}>
        Enter the email address associated with your account and we'll send you
        a link to reset your password.
      </Text>
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
        isPasswordHidden={false}
        errorMessage={errors.email?.message}
        accessibilityLabel="resetPasswordInput"
        nativeID="resetPasswordInput"
      />

      {errors.email && <Text>{errors.email?.message}</Text>}
      {isSuccess && <Text>Success</Text>}
      <View style={styles.buttonView}>
        <Button
          text={isLoading ? "Loading..." : "Reset"}
          onPress={handleSubmit(onSubmit)}
          variant="primary"
          accessibilityLabel="sentResetPasswordButton"
          nativeID="sentResetPasswordButton"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    paddingBottom: 10,
  },
  buttonView: {
    paddingTop: 20,
  },
});
