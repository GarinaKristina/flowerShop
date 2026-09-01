import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export function AvatarPicker() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const pickAvatar = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 0.8,
    });

    if (result.assets?.[0]?.uri) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickAvatar}>
      <Image
        source={avatar ? { uri: avatar } : require('../../assets/cat.png')}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          alignItems: 'center',
        }}
      />
    </TouchableOpacity>
  );
}
