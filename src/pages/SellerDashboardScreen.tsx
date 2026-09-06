import { ScrollView, StyleSheet, View } from 'react-native';

import React from 'react';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { WelcomeSeller } from '../components/sellerDashboard/WelcomeSeller';
import { RevenueToday } from '../components/sellerDashboard/RevenueToday';
import { SubStatistic } from '../components/sellerDashboard/SubStatistic';
import { WeeklyPerformance } from '../components/sellerDashboard/WeeklyPerformance';
import { CirclePlus, ClipboardList, Flower2, Settings, Star } from 'lucide-react-native';
import { ManagementHub } from '../components/sellerDashboard/ManagementHub';
import { RecentAlerts } from '../components/sellerDashboard/RecentAlerts';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { pages } from '../constants/navigation';

const managementItems = [
  { label: 'Add Flower', color: '#F2F2FDFF', icon: CirclePlus, route: pages.AddFlower },
  { label: 'Listings', color: '#FDF2F5FF', icon: Flower2, route: pages.Listings },
  { label: 'Reviews', color: '#EEFCFAFF', icon: Star, route: pages.Reviews },
  { label: 'Settings', color: '#F5F2FDFF', icon: Settings, route: pages.Settings },
];

export function SellerDashboard() {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <WelcomeSeller />
        <RevenueToday />
        <View style={styles.subStatisticContainer}>
          <SubStatistic label={'ACTIVE LISTINGS'} statisticNumber={'24'} icon={Flower2} />
          <SubStatistic label={'ORDERS TODAY'} statisticNumber={'08'} icon={ClipboardList} />
        </View>
        <WeeklyPerformance />
        <View style={styles.managementHubContainer}>
          {managementItems.map(item => (
            <ManagementHub
              key={item.label}
              label={item.label}
              color={item.color}
              icon={item.icon}
              onPress={() => navigation.navigate(item.route)}
            />
          ))}
        </View>
        <RecentAlerts />
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
  managementHubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    gap: 40,
  },
  subStatisticContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    paddingHorizontal: 16,
  },
});
