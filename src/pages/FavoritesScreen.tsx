import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { ListingsGrid } from '../components/common/ListingsGrid';
import { layoutStyles, Typography } from '../components/common/Typography';
import { useFavorites } from '../context/FavoritesContext';
import { screenTitles } from '../constants/mainInfo';

export function Favorites() {
  const { favorites } = useFavorites();

  return (
    <View style={layoutStyles.screen}>
      {favorites.length > 0 ? (
        <ScrollView contentContainerStyle={styles.scroll}>
          <ListingsGrid listings={favorites} />
        </ScrollView>
      ) : (
        <View style={layoutStyles.centered}>
          <Typography variant="screenTitle">{screenTitles.favorites}</Typography>
        </View>
      )}
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 24,
  },
});
