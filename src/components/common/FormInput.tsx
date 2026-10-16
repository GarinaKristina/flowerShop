import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Control, FieldPath, FieldPathValue, FieldValues, useController } from 'react-hook-form';
import InputComponent from './Input';
import { FieldError } from './FieldError';
import { Typography } from './Typography';

type StringFieldPath<T extends FieldValues> = {
  [K in FieldPath<T>]: FieldPathValue<T, K> extends string ? K : never;
}[FieldPath<T>];

type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: StringFieldPath<T>;
  label: string;
  placeholderValue: string;
  icon?: React.ReactNode;
  width?: number;
};

export function FormInput<T extends FieldValues>({ control, name, label, placeholderValue, icon, width }: FormInputProps<T>) {
  const { field, fieldState } = useController({ control, name });

  return (
    <View>
      <Typography variant="fieldLabel" style={styles.inputDescription}>
        {label}
      </Typography>
      <InputComponent
        placeholderValue={placeholderValue}
        icon={icon}
        value={field.value}
        onChangeText={field.onChange}
        style={width === undefined ? undefined : { width }}
        inputStyle={width === undefined ? undefined : { width }}
      />
      <FieldError message={fieldState.error?.message} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputDescription: {
    marginTop: 4,
  },
});
