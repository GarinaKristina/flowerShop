import {StyleSheet, View} from 'react-native';
import InputComponent from '../components/Input';
import FilterButton from '../components/FilterButton';

export function BuyerHome() {
  return (
    <View style={styles.row}>
      <InputComponent />
      <FilterButton style={styles.filterButton} />
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
