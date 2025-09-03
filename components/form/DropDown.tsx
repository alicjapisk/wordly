import React, { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { Control, FieldErrors, RegisterOptions } from "react-hook-form";

interface DropDownProps {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  errors?: FieldErrors;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  open: boolean;
  items: Array<{ label: string; value: string }>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setItems: Dispatch<SetStateAction<Array<{ label: string; value: string }>>>;
  searchable: boolean;
  testID: string;
}

function DropDown({
  name,
  control,
  rules,
  errors,
  label,
  placeholder,
  open,
  items,
  setOpen,
  setItems,
  searchable,
  errorMessage,
  testID,
}: DropDownProps) {
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
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={(val) =>
                onChange(typeof val === "function" ? val(value) : val)
              }
              setItems={setItems}
              searchable={searchable}
              placeholder={placeholder}
              testID={testID}
              style={{ marginTop: 10 }}
              onClose={onBlur}
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

export default DropDown;

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
