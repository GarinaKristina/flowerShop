import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Plus } from 'lucide-react-native';
import { addFlowerLabels } from '../../constants/mainInfo';

type EmptyPhotoTileProps = {
  size: number;
  onPress: () => void;
};

export function EmptyPhotoTile({ size, onPress }: EmptyPhotoTileProps) {
  return (
    <TouchableOpacity style={[styles.tile, { width: size, height: size }]} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.plusCircle}>
        <Plus size={20} color="#565D6D" />
      </View>
      <Text style={styles.label}>{addFlowerLabels.addPhoto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DEE1E6',
  },
  plusCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#565D6D',
    marginTop: 3,
  },
});
