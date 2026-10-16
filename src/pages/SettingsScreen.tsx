import React from 'react';
import { View } from 'react-native';
import { screenTitles } from '../constants/mainInfo';
import { layoutStyles, Typography } from '../components/common/Typography';

export function Settings() {
  return (
    <View style={layoutStyles.screen}>
      <View style={layoutStyles.centered}>
        <Typography variant="screenTitle">{screenTitles.settings}</Typography>
      </View>
    </View>
  );
}
