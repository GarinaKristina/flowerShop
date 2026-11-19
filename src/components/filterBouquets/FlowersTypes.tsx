import { Flower } from 'lucide-react-native';
import { Divider } from '../common/Divider';
import { Pressable, StyleSheet, View } from 'react-native';
import { layoutStyles, Typography } from '../common/Typography';
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
    <View style={layoutStyles.filterSection}>
      <View style={layoutStyles.filterTitleRow}>
        <Flower size={20} color={PRIMARY_ICON_COLOR} />
        <Typography variant="filterTitle">{filterBouquetsLabels.flowerTypeTitle}</Typography>
      </View>
      <View style={styles.chips}>
        {filterBouquetsLabels.flowerTypes.map((type, index) => {
          const isSelected = selectedFilter === index;
          return (
            <Pressable key={type} onPress={() => handleSelect(index, type)} style={[styles.chip, isSelected && styles.chipSelected]}>
              <Typography variant="subtitle1" style={isSelected && styles.chipTextSelected}>
                {type}
              </Typography>
            </Pressable>
          );
        })}
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
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
  chipTextSelected: { color: '#FFFFFF' },
});
