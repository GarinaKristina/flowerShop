import { Leaf } from 'lucide-react-native';
import { Divider } from '../common/Divider';
import { Pressable, StyleSheet, View } from 'react-native';
import { layoutStyles, Typography } from '../common/Typography';
import { ACCENT_COLOR, PRIMARY_ICON_COLOR } from '../../constants/colors';
import { freshnessLevelLabels } from '../../constants/mainInfo';
import { useSelection } from '../../hooks/useSelection';

type FreshnessLevelProps = {
  onChange: (value: string) => void;
};

export function FreshnessLevel({ onChange }: FreshnessLevelProps) {
  const { selectedFilter, selectNewFilter } = useSelection(1);

  const handleSelect = (index: number, value: string) => {
    selectNewFilter(index);
    onChange(value);
  };

  return (
    <View style={layoutStyles.filterSection}>
      <View style={layoutStyles.filterTitleRow}>
        <Leaf size={18} color={PRIMARY_ICON_COLOR} />
        <Typography variant="filterTitleSmall">{freshnessLevelLabels.title}</Typography>
      </View>
      <View style={styles.chips}>
        {freshnessLevelLabels.levels.map((level, index) => {
          const isSelected = selectedFilter === index;
          return (
            <Pressable key={level} onPress={() => handleSelect(index, level)} style={[styles.chip, isSelected && styles.chipSelected]}>
              <Typography variant="subtitle1" style={isSelected && styles.chipTextSelected}>
                {level}
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
    backgroundColor: '#F8F8FA',
    borderRadius: 9999,
  },
  chipSelected: { backgroundColor: ACCENT_COLOR },
  chipTextSelected: { color: '#FFFFFF' },
});
