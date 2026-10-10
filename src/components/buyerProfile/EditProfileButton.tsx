import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { buyerProfileLabels } from '../../constants/mainInfo';

type EditProfileButtonProps = {
  onPress?: () => void;
};

export function EditProfileButton({ onPress }: EditProfileButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{buyerProfileLabels.editProfile}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    left: 153,
    width: 122,
    height: 40,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: PRIMARY_ICON_COLOR,
    opacity: 1,
  },

  text: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    color: PRIMARY_ICON_COLOR,
  },
  pressed: {
    opacity: 0.7,
  },
});
