import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

type AvatarProps = {
  avatarType: 'buyer' | 'seller';
  // avatarUrl?:string;
  // onChange:(avatarUri: string | null) => void
};

export async function pickPhotos(selectionLimit = 1) {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit,
    quality: 0.8,
  });

  const uris: string[] = [];

  for (const asset of result.assets ?? []) {
    if (asset.uri) {
      uris.push(asset.uri);
    }
  }

  return uris;
}

export function AvatarPicker({ avatarType }: AvatarProps) {
  const [avatar, setAvatar] = useState<string | null>(null);

  const pickAvatar = async () => {
    const [uri] = await pickPhotos();

    if (uri) {
      setAvatar(uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickAvatar}>
      <Image
        source={avatar ? { uri: avatar } : require('../../../assets/cat.png')}
        style={avatarType === 'buyer' ? styles.buyerSize : styles.sellerSize}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buyerSize: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
  },
  sellerSize: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
  },
});
