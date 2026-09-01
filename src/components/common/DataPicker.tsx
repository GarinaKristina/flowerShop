import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from 'lucide-react-native';
import { useOpen } from '../../hooks/useOpenClose';
import { ViewStyleProp } from '../../utils/styles';

type DatePickerInputProps = {
  value: Date;
  onChange: (date: Date) => void;
  label?: string;
  placeholder?: string;
  style?: ViewStyleProp;
  inputStyle?: ViewStyleProp;
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
  const datePickerModal = useOpen();
  const dateSelected = useOpen();

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - minimumAge);

  const handleChange = (event: unknown, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      datePickerModal.close();
    }
    if (selectedDate) {
      onChange(selectedDate);
      dateSelected.open();
    }
  };

  return (
    <View style={style}>
      {label && <Text style={styles.inputDescription}>{label}</Text>}
      <TouchableOpacity onPress={datePickerModal.open} style={[styles.inputWrapper, inputStyle]}>
        <View style={styles.leftIcon} pointerEvents="none">
          <Calendar size={16} color="#565D6D" />
        </View>
        <Text style={[styles.input, !dateSelected.isOpen && styles.placeholderText]}>
          {dateSelected.isOpen ? value.toLocaleDateString() : placeholder}
        </Text>
      </TouchableOpacity>

      {datePickerModal.isOpen && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onValueChange={handleChange}
          onDismiss={datePickerModal.close}
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
