import { ScrollView, StyleSheet, View } from 'react-native';

import React from 'react';
import { BottomNavigation } from '../components/BottomNavigation';
import { WelcomeSeller } from '../components/sellerDashboard/WelcomeSeller';

export function SellerDashboard() {
  return ( 
   <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <WelcomeSeller/>
      </ScrollView>
        <BottomNavigation />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
});
