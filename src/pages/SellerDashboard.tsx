import { ScrollView, StyleSheet, View } from 'react-native';

import React from 'react';
import { BottomNavigation } from '../components/BottomNavigation';
import { WelcomeSeller } from '../components/sellerDashboard/WelcomeSeller';
import { RevenueToday } from '../components/sellerDashboard/RevenueToday';
import { SubStatistic } from '../components/sellerDashboard/SubStatistic';
import { ClipboardList, Flower2 } from 'lucide-react-native';

export function SellerDashboard() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <WelcomeSeller />
        <RevenueToday />
        <View style={styles.subStatisticContainer}>
          <SubStatistic
            label={'ACTIVE LISTINGS'}
            statisticNumber={'24'}
            icon={Flower2}
          />
          <SubStatistic
            label={'ORDERS TODAY'}
            statisticNumber={'08'}
            icon={ClipboardList}
          />
        </View>
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
  subStatisticContainer: {
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
