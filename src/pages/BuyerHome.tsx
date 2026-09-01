import { ScrollView, StyleSheet, View } from 'react-native';
import InputComponent from '../components/common/Input';
import FilterButton from '../components/common/FilterButton';
import React from 'react';
import { FeaturedForYou } from '../components/buyerHome/FeaturedForYou';
import { ScrollableFilters } from '../components/buyerHome/ScrollableFilters';
import { NearYou } from '../components/buyerHome/NearYou';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { Search } from 'lucide-react-native';

export function BuyerHome() {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.row}>
          <InputComponent placeholderValue={'Search for bouquets...'} icon={<Search size={16} />} />
          <FilterButton style={styles.filterButton} />
        </View>

        <ScrollableFilters />
        <FeaturedForYou />
        <NearYou />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  filterButton: {
    marginLeft: 5,
  },
  screen: {
    paddingBottom: 20,
  },
});
