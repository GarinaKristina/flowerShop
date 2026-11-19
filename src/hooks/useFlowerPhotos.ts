import { useCallback, useState } from 'react';
import { pickPhotos } from '../components/common/ImagePicker';
import { MAX_FLOWER_PHOTOS } from '../constants/mainInfo';

export const useFlowerPhotos = (maxPhotos = MAX_FLOWER_PHOTOS) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const freeSlots = maxPhotos - photos.length;

  const addPhotos = useCallback(async () => {
    const newPhotos = await pickPhotos(freeSlots);

    if (newPhotos.length === 0) {
      return;
    }

    setPhotos(current => [...current, ...newPhotos].slice(0, maxPhotos));
  }, [freeSlots, maxPhotos]);

  const removePhoto = useCallback((uri: string) => {
    setPhotos(current => current.filter(photo => photo !== uri));
  }, []);

  return { photos, freeSlots, addPhotos, removePhoto };
};
