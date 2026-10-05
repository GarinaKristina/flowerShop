import { ScrollView, StyleSheet, View } from 'react-native';
import InputComponent from '../components/common/Input';
import FilterButton from '../components/common/FilterButton';
import React from 'react';
import { FeaturedForYou } from '../components/buyerHome/FeaturedForYou';
import { ScrollableFilters } from '../components/buyerHome/ScrollableFilters';
import { NearYou } from '../components/buyerHome/NearYou';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { Search } from 'lucide-react-native';
import { placeholders } from '../constants/mainInfo';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { pages } from '../constants/navigation';

export function BuyerHome() {
  const navigation = useAppNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.row}>
          <InputComponent placeholderValue={placeholders.searchForBouquets} icon={<Search size={16} />} />
          <FilterButton style={styles.filterButton} onPress={() => navigation.navigate(pages.FilterBouquets)} />
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
  container: {
    flex: 1,
  },
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
