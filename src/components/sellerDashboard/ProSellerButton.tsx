import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type TagProps = {
  onPress?: () => void;
};

export function ProSellerButton({ onPress }: TagProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.tagItem, pressed && styles.tagItemPressed]}>
      <Text style={[styles.label]}>Pro Seller</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tagItem: {
    height: 26,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    backgroundColor: '#bfc4f1d6',
    borderWidth: 1,
    borderColor: '#636AE8',
  },
  tagItemPressed: {
    backgroundColor: '#BCC1CA',
    borderColor: '#565E6C',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '600',
    color: '#636AE8',
  },
  labelMuted: {
    color: '#565E6C',
  },
});
