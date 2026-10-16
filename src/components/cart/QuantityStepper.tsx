import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Minus, Plus } from 'lucide-react-native';

type QuantityStepperProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function QuantityStepper({ quantity, onDecrease, onIncrease }: QuantityStepperProps) {
  const canDecrease = quantity > 1;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onDecrease} disabled={!canDecrease} hitSlop={6}>
        <Minus size={12} color={canDecrease ? '#171A1F' : '#BCC1CA'} />
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable style={styles.button} onPress={onIncrease} hitSlop={6}>
        <Plus size={12} color="#171A1F" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 32,
    paddingHorizontal: 6,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#DEE1E6',
  },
  button: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    minWidth: 12,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '600',
    color: '#171A1F',
  },
});
