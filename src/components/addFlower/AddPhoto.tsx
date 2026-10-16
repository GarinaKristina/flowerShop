import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Typography } from '../common/Typography';
import { PhotoTile } from './PhotoTile';
import { EmptyPhotoTile } from './EmptyPhotoTile';
import { useFlowerPhotos } from '../../hooks/useFlowerPhotos';
import { addFlowerLabels } from '../../constants/mainInfo';

const COLUMNS = 3;
const GAP = 12;
const PADDING = 16;

export function AddPhoto() {
  const { photos, freeSlots, addPhotos, removePhoto } = useFlowerPhotos();
  const { width } = useWindowDimensions();

  const freeWidth = width - PADDING * 2 - GAP * (COLUMNS - 1);
  const tileSize = Math.floor(freeWidth / COLUMNS);

  const emptySlots = Array(freeSlots).fill(null);

  return (
    <View style={styles.wrapper}>
      <Typography variant="body2Bold" style={styles.title}>
        {addFlowerLabels.photos}
      </Typography>
      <Typography variant="body2" style={styles.description}>
        {addFlowerLabels.photosDescription}
      </Typography>

      <View style={styles.grid}>
        {photos.map((uri, index) => (
          <PhotoTile key={uri} uri={uri} size={tileSize} isPrimary={index === 0} onRemove={() => removePhoto(uri)} />
        ))}

        {emptySlots.map((_, index) => (
          <EmptyPhotoTile key={index} size={tileSize} onPress={addPhotos} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: PADDING,
  },
  title: {
    letterSpacing: 0.5,
  },
  description: {
    marginTop: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GAP,
    marginTop: 16,
  },
});
