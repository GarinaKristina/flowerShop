import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { buyerProfileLabels } from '../../constants/mainInfo';
import { Typography } from '../common/Typography';

type EditProfileButtonProps = {
  onPress?: () => void;
};

export function EditProfileButton({ onPress }: EditProfileButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Typography variant="buttonSmall" color={PRIMARY_ICON_COLOR}>
        {buyerProfileLabels.editProfile}
      </Typography>
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
  pressed: {
    opacity: 0.7,
  },
});
