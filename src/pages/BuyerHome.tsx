import { ScrollView, StyleSheet, Text, View } from 'react-native';
import InputComponent from '../components/Input';
import FilterButton from '../components/FilterButton';

export function BuyerHome() {
  const highlights: string[] = ['Roses', 'Tulips', 'Mixed', 'Wedding'];

  return (
    <View>
      <View style={styles.row}>
        <InputComponent />
        <FilterButton style={styles.filterButton} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.highlights}>
          {highlights.map((highlight, index) => (
            <View key={index} style={styles.highlightItem}>
              <Text style={styles.highlightText}>{highlight}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
  highlights: {
    marginTop: 8,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  highlightItem: {
    height: 42,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e7ec3e',
    opacity: 1,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#DEE1E6',
  },
  highlightText: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    color: '#171A1F',
  },
});
