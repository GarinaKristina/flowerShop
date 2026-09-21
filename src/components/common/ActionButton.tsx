import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { ViewStyleProp } from '../../utils/styles';

type ActionButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'filled' | 'outlined';
  icon?: React.ReactNode;
  style?: ViewStyleProp;
};

export function ActionButton({ label, onPress, variant = 'filled', icon, style }: ActionButtonProps) {
  const isFilled = variant === 'filled';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, isFilled ? styles.filledButton : styles.outlinedButton, pressed && styles.pressed, style]}
    >
      {icon}
      <Text style={[styles.label, isFilled ? styles.filledLabel : styles.outlinedLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
  },
  filledButton: {
    backgroundColor: '#636AE8',
    borderColor: '#636AE8',
  },
  outlinedButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE1E6',
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
  },
  filledLabel: {
    color: '#FFFFFF',
  },
  outlinedLabel: {
    color: '#171A1F',
  },
});
