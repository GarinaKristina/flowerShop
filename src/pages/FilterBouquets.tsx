import { ScrollView, StyleSheet } from 'react-native';
import { FilterSlider } from '../components/filterBouquets/FilterSlider';
import { FlowersTypes } from '../components/filterBouquets/FlowersTypes';
import { FreshnessLevel } from '../components/filterBouquets/FreshnessLevel';
import { Logistic } from '../components/filterBouquets/Logistic';

export function FilterBouquets() {
  return (
    <ScrollView style={styles.container}>
      <FilterSlider />
      <FlowersTypes />
      <FreshnessLevel />
      <Logistic />
      {/* <View /> //button 'Apply Filters' */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
