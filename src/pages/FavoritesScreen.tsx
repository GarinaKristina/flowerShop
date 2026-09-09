import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { screenTitles } from '../constants/mainInfo';

export function Favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{screenTitles.favorites}</Text>
      </View>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
