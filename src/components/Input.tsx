import {Search} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const InputComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.leftIcon} pointerEvents="none">
        <Search size={16} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Search for bouquets..."
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
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400',
    backgroundColor: '#FAFAFB',
    borderRadius: 16,
    borderWidth: 0,
    borderColor: '#000000',
    borderStyle: 'solid',
    shadowColor: '#171A1F',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default InputComponent;