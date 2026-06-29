import { ScrollView, StyleSheet, View } from 'react-native';

import React from 'react';
import { BottomNavigation } from '../components/BottomNavigation';
import { WelcomeSeller } from '../components/sellerDashboard/welcomeSeller';

export function SellerDashboard() {
  return ( 
   <View>
      <ScrollView contentContainerStyle={styles.content}>
      </ScrollView>
        <BottomNavigation />
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 32,
  },
  
});
