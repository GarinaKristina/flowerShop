import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type InputProps = {
  placeholderValue: string,
  icon?: React.ReactNode,
  value?: string, 
  onChangeText?: (text: string) => void, 
  style?: object,
  inputStyle?: object,
  
};

const InputComponent = ({placeholderValue, icon, value, onChangeText, style, inputStyle} : InputProps) => {

  return (
    <View style={[styles.inputWrapper, style]}>
      <View style={styles.leftIcon} pointerEvents="none">
        {icon }
      </View>
      <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholderValue}
        inputMode="text"
        maxLength={20}
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
    top: 14,
    width: 16,
    height: 16,
    zIndex: 1,
  },
  input: {
    width: 330,
    height: 44,
    paddingLeft: 34,
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
});

export default InputComponent;
