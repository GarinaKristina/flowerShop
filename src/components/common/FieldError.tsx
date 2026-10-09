import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MessageCircleWarning } from 'lucide-react-native';

type FieldErrorProps = {
  message?: string;
};

export function FieldError({ message }: FieldErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <View style={styles.errorRow}>
      <MessageCircleWarning size={16} color="#EF4444" />
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 4,
  },
  errorText: {
    color: '#EF4444',
    marginLeft: 8,
    fontSize: 13,
  },
});
