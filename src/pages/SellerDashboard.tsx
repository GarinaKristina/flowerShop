import { ScrollView, StyleSheet, View } from 'react-native';

import React from 'react';
import { BottomNavigation } from '../components/BottomNavigation';

export function SellerDashboard() {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.content} />
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 32,
  },
});
