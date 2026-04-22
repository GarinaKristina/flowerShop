import {  StyleSheet, View } from 'react-native';
import InputComponent from '../components/Input';
import FilterButton from '../components/FilterButton';
import React from 'react';
import { FeaturedForYou } from '../components/buyerHome/FeaturedForYou';
import { ScrollableFilters } from '../components/buyerHome/ScrollableFilters';

export function BuyerHome() {
  return (
    <View>
      <View style={styles.row}>
        <InputComponent />
        <FilterButton style={styles.filterButton} />
      </View>
      <ScrollableFilters/>
     <FeaturedForYou/>
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
});
