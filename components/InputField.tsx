import React from "react";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
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
  // testID: string;
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
  // testID,
}: InputFieldProps) {
  return (
    <View className="pb-[5px]">
      <Text className="text-white pb-[5px]">{label}</Text>
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
            className="text-black outline-none lg:text-1920x/T1 md:text-1440x/T1 sm:text-360x/T1 lg:leading-1920x/T1 md:leading-1440x/T1 sm:leading-360x/T1 w-full rounded-[10px] lg:pt-[12px] lg:pb-[14px] px-[20px] md:pt-[11px] md:pb-[12px] sm:pt-[13px] sm:pb-[12px] "
            renderErrorMessage={false}
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            containerStyle={{
              paddingHorizontal: 0,
            }}
            accessibilityLabel={accessibilityLabel}
            // testID={testID}
            autoComplete="new-password"
          />
        )}
        name={name}
      />
      {errors[name] && (
        <Text className="text-red pl-3 font-semibold">
          {errors[name]?.message || errorMessage}
        </Text>
      )}
    </View>
  );
}

export default InputField;
