import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export function EditProfileButton({ onPress }) {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>Edit Profile</Text>
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
    borderColor: '#636AE8',
    opacity: 1,
  },

  text: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    color: '#636AE8',
  },
  pressed: {
    opacity: 0.7,
  },
});