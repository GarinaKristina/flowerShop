import { Flower } from 'lucide-react-native';
import { Divider } from '../common/Divider';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import { filterBouquetsLabels } from '../../constants/mainInfo';
import { useSelection } from '../../hooks/useSelection';

type FlowersTypesProps = {
  onChange: (value: string) => void;
};

export function FlowersTypes({ onChange }: FlowersTypesProps) {
  const { selectedFilter, selectNewFilter } = useSelection(0);

  const handleSelect = (index: number, value: string) => {
    selectNewFilter(index);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Flower size={20} color={PRIMARY_ICON_COLOR} />
        <Text style={styles.label}>{filterBouquetsLabels.flowerTypeTitle}</Text>
      </View>
      <View style={styles.chips}>
        {filterBouquetsLabels.flowerTypes.map((type, index) => {
          const isSelected = selectedFilter === index;
          return (
            <Pressable key={type} onPress={() => handleSelect(index, type)} style={[styles.chip, isSelected && styles.chipSelected]}>
              <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>{type}</Text>
            </Pressable>
          );
        })}
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingVertical: 16 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  label: { fontSize: 16, fontWeight: '700', fontFamily: 'Archivo', color: '#565D6D' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 16 },
  chip: {
    height: 42,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#DEE1E6',
  },
  chipSelected: { backgroundColor: PRIMARY_ICON_COLOR, borderColor: PRIMARY_ICON_COLOR },
  chipText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#171A1F',
  },
  chipTextSelected: { color: '#FFFFFF' },
});
