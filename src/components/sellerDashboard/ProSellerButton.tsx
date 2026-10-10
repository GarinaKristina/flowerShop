import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { sellerDashboardLabels } from '../../constants/mainInfo';

type TagProps = {
  onPress?: () => void;
};

export function ProSellerButton({ onPress }: TagProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.tagItem, pressed && styles.tagItemPressed]}>
      <Text style={[styles.label]}>{sellerDashboardLabels.proSeller}</Text>
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
    borderColor: PRIMARY_ICON_COLOR,
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
    color: PRIMARY_ICON_COLOR,
  },
  labelMuted: {
    color: '#565E6C',
  },
});
