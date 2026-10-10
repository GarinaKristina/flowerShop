import { ChevronRight } from 'lucide-react-native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActionButton } from '../components/common/ActionButton';
import { FilterSlider } from '../components/filterBouquets/FilterSlider';
import { FlowersTypes } from '../components/filterBouquets/FlowersTypes';
import { FreshnessLevel } from '../components/filterBouquets/FreshnessLevel';
import { Logistic } from '../components/filterBouquets/Logistic';
import { PrimaryColor } from '../components/filterBouquets/PrimaryColor';
import { filterBouquetsLabels } from '../constants/mainInfo';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { useBouquetFilters } from '../hooks/useBouquetFilters';
import { pages } from '../constants/navigation';

// const data : Array<object>= [{
//   id: 1,
//   name: 'Roses',
//   colors: 'red',
//   cost: 15,
//   level: "Premium"
// },
// {
//   id: 2,
//   name: 'Tulips',
//   colors: 'yellow',
//   cost: 15,
//   level: "Premium"
// },
// {
//   id: 3,
//   name: 'Peonies',
//   colors: 'pink',
//   cost: 15,
//   level: "Premium"
// }]

export function FilterBouquets() {
  const navigation = useAppNavigation();
  const { filters, selectFilterOption } = useBouquetFilters();
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
        <FilterSlider onChange={value => selectFilterOption('maxPrice', value)} />
        <FlowersTypes onChange={value => selectFilterOption('flowerType', value)} />
        <PrimaryColor onChange={value => selectFilterOption('color', value)} />
        <FreshnessLevel onChange={value => selectFilterOption('freshness', value)} />
        <Logistic onChange={selectFilterOption} />
      </ScrollView>
      <View style={styles.footer}>
        <ActionButton
          label={filterBouquetsLabels.applyFilters}
          icon={<ChevronRight size={20} color="#FFFFFF" />}
          style={styles.applyButton}
          onPress={() => {
            console.log('apply', filters);
            navigation.navigate(pages.BuyerHome, { filters });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#DEE1E680',
  },
  applyButton: {
    height: 52,
    borderRadius: 16,
  },
});
