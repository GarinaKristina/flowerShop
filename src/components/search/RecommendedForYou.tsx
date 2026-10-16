import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { searchLabels } from '../../constants/mainInfo';
import { ListingsGrid } from '../common/ListingsGrid';

export function RecommendedForYou() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{searchLabels.recommendedForYou}</Text>
      <ListingsGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    paddingHorizontal: 16,
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
});
