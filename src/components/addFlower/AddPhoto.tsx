import React from 'react';
import { Text, View } from 'react-native';
import { AvatarPicker } from '../common/ImagePicker';
import { addFlowerLabels } from '../../constants/mainInfo';

export function AddPhoto() {
  return (
    <View>
      <Text>{addFlowerLabels.photos}</Text>
      <Text>{addFlowerLabels.photosDescription}</Text>
      <AvatarPicker avatarType="seller" />
    </View>
  );
}
