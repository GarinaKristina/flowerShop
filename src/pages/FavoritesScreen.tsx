import React from 'react';
import { View } from 'react-native';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { layoutStyles, Typography } from '../components/common/Typography';
import { screenTitles } from '../constants/mainInfo';

export function Favorites() {
  return (
    <View style={layoutStyles.screen}>
      <View style={layoutStyles.centered}>
        <Typography variant="screenTitle">{screenTitles.favorites}</Typography>
      </View>
      <BottomNavigation />
    </View>
  );
}
