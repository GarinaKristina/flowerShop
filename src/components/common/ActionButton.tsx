import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ViewStyleProp } from '../../utils/styles';
import { Typography } from './Typography';

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
      <Typography variant="buttonMedium" style={isFilled ? styles.filledLabel : styles.outlinedLabel}>
        {label}
      </Typography>
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
    backgroundColor: PRIMARY_ICON_COLOR,
    borderColor: PRIMARY_ICON_COLOR,
  },
  outlinedButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE1E6',
  },
  pressed: {
    opacity: 0.7,
  },
  filledLabel: {
    color: '#FFFFFF',
  },
  outlinedLabel: {
    color: '#171A1F',
  },
});
