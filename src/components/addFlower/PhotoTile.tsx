import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { X } from 'lucide-react-native';
import { addFlowerLabels } from '../../constants/mainInfo';

type PhotoTileProps = {
  uri: string;
  size: number;
  isPrimary: boolean;
  onRemove: () => void;
};

export function PhotoTile({ uri, size, isPrimary, onRemove }: PhotoTileProps) {
  return (
    <View style={[styles.tile, { width: size, height: size }]}>
      <Image source={{ uri }} style={styles.photo} />

      {isPrimary && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{addFlowerLabels.primary}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.removeButton} onPress={onRemove} accessibilityLabel={addFlowerLabels.removePhoto} hitSlop={8}>
        <X size={12} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#636AE8',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  removeButton: {
    position: 'absolute',
    top: 4,
    right: 6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(23, 26, 31, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
