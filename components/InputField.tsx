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
  onKeyPress?: (e: any) => void;
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
  toggleEye,
  isPasswordHidden,
  errorMessage,
  accessibilityLabel,
  nativeID,
}: InputFieldProps) {
  return (
    <View>
      <Text>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
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
          />
        )}
        name={name}
      />
      {errors[name] && <Text>{errors[name]?.message || errorMessage}</Text>}
    </View>
  );
}

export default InputField;
