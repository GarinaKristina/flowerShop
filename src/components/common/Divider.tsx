import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Divider() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    height: 0,
    borderBottomWidth: 1,
    borderColor: '#DEE1E680',
    marginTop: 16,
  },
});
