import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AddPhoto } from '../components/addFlower/AddPhoto';

export function AddFlower() {
  return (
    <View style={styles.container}>
      <AddPhoto />
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
