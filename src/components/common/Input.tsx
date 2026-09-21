import React from 'react';
import { InputModeOptions, StyleSheet, TextInput, View } from 'react-native';
import { TextStyleProp, ViewStyleProp } from '../../utils/styles';

const DEFAULT_MAX_LENGTH = 20;

type InputProps = {
  placeholderValue: string;
  icon?: React.ReactNode;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyleProp;
  inputStyle?: TextStyleProp;
  variant?: 'filled' | 'outlined';
  multiline?: boolean;
  maxLength?: number;
  inputMode?: InputModeOptions;
};

const InputComponent = ({
  placeholderValue,
  icon,
  value,
  onChangeText,
  style,
  inputStyle,
  variant = 'filled',
  multiline = false,
  maxLength = DEFAULT_MAX_LENGTH,
  inputMode = 'text',
}: InputProps) => {
  return (
    <View style={[styles.inputWrapper, style]}>
      {icon ? (
        <View style={styles.leftIcon} pointerEvents="none">
          {icon}
        </View>
      ) : null}
      <TextInput
        style={[
          styles.input,
          icon ? styles.inputWithIcon : styles.inputWithoutIcon,
          variant === 'outlined' && styles.outlinedInput,
          multiline && styles.multilineInput,
          inputStyle,
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholderValue}
        inputMode={inputMode}
        maxLength={maxLength}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 8,
    width: 330,
    height: 44,
    position: 'relative',
  },
  leftIcon: {
    position: 'absolute',
    left: 12,
    top: 0,
    bottom: 0,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  input: {
    width: '100%',
    height: 44,
    paddingRight: 12,
    fontFamily: 'Inter',
    paddingVertical: 0,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    backgroundColor: '#FAFAFB',
    borderRadius: 8,
    borderWidth: 0,
    borderColor: '#000000',
    borderStyle: 'solid',
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 3,
  },
  inputWithIcon: {
    paddingLeft: 34,
  },
  inputWithoutIcon: {
    paddingLeft: 12,
  },
  outlinedInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DEE1E6',
    shadowOpacity: 0,
    elevation: 0,
  },
  multilineInput: {
    height: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    lineHeight: 22,
    textAlignVertical: 'top',
  },
  erroredInput: {
    borderWidth: 1,
    borderColor: '#EF4444',
  },
});

export default InputComponent;
