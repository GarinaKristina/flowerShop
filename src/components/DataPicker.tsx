import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from 'lucide-react-native';

type DatePickerInputProps = {
  value: Date;
  onChange: (date: Date) => void;
  label?: string;
  placeholder?: string;
  style?: object;
  inputStyle?: object;
  minimumAge?: number;
};

export const DatePickerInput = ({
  value,
  onChange,
  label,
  placeholder = 'Select date',
  style,
  inputStyle,
  minimumAge = 18,
}: DatePickerInputProps) => {
  const [showPicker, setShowPicker] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - minimumAge);

  const handleChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    if (selectedDate) {
      onChange(selectedDate);
      setIsSelected(true);
    }
  };

  return (
    <View style={style}>
      {label && <Text style={styles.inputDescription}>{label}</Text>}
      <TouchableOpacity 
        onPress={() => setShowPicker(true)}
        style={[styles.inputWrapper, inputStyle]}
      >
        <View style={styles.leftIcon} pointerEvents="none">
          <Calendar size={16} color="#565D6D" />
        </View>
        <Text style={[styles.input, !isSelected && styles.placeholderText]}>
          {isSelected ? value.toLocaleDateString() : placeholder}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={handleChange}
          maximumDate={maxDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 inputDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#565D6D',
    marginTop: 4,
    fontWeight: '700',
  },
  inputWrapper: {
    marginTop: 8,
    width: 360,
    height: 44,
    position: 'relative',
    justifyContent: 'center',
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
    width: 360,
    height: 44,
    paddingLeft: 34,
    paddingRight: 12,
    paddingVertical: 0,
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 44,
    fontWeight: '400',
    backgroundColor: '#FAFAFB',
    borderRadius: 8,
    borderWidth: 0,
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 3,
  },
  placeholderText: {
    color: '#9CA3AF',
  },
});