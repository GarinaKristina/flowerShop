import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { screenTitles } from '../constants/mainInfo';

export function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{screenTitles.settings}</Text>
      </View>
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
