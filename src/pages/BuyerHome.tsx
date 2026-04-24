import { ScrollView, StyleSheet, View } from 'react-native';
import InputComponent from '../components/Input';
import FilterButton from '../components/FilterButton';
import React from 'react';
import { FeaturedForYou } from '../components/buyerHome/FeaturedForYou';
import { ScrollableFilters } from '../components/buyerHome/ScrollableFilters';
import { NearYou } from '../components/buyerHome/NearYou';

export function BuyerHome() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.row}>
        <InputComponent />
        <FilterButton style={styles.filterButton} />
      </View>

      <ScrollableFilters />
      <FeaturedForYou />
      <NearYou />
    </ScrollView>
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
