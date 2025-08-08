import React from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

import { Control, FieldErrors, RegisterOptions } from "react-hook-form";

interface InputFieldProps {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  errors?: FieldErrors;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  toggleEye?: () => React.ReactNode;
  isPasswordHidden?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  accessibilityLabel: string;
  nativeID: string;
}

function InputField({
  name,
  control,
  rules,
  errors,
  label,
  placeholder,
  errorMessage,
  toggleEye,
  isPasswordHidden,
  multiline,
  numberOfLines,
  accessibilityLabel,
  nativeID,
}: InputFieldProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <Input
              rightIcon={toggleEye ? toggleEye() : null}
              rightIconContainerStyle={{ paddingRight: 20 }}
              secureTextEntry={isPasswordHidden}
              placeholder={placeholder}
              placeholderTextColor="#4A484A"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              renderErrorMessage={false}
              inputContainerStyle={{
                borderBottomWidth: 1,
              }}
              inputStyle={{ fontSize: 14 }}
              containerStyle={{
                paddingHorizontal: 0,
              }}
              accessibilityLabel={accessibilityLabel}
              nativeID={nativeID}
              autoComplete="new-password"
              multiline={multiline ?? false}
              numberOfLines={numberOfLines}
            />
            {error && (
              <View style={styles.errorContainer}>
                <Text style={styles.error}>
                  {error.message || errorMessage}
                </Text>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
}

export default InputField;

const styles = StyleSheet.create({
  label: {
    color: "#FF7617",
    fontWeight: 600,
    fontSize: 16,
  },
  error: {
    color: "black",
    fontSize: 13,
  },
  errorContainer: {
    marginTop: 4,
    backgroundColor: "#f7cdcd",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
