import { Leaf } from 'lucide-react-native';
import { Divider } from '../common/Divider';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Leaf size={18} color={PRIMARY_ICON_COLOR} />
        <Text style={styles.label}>{freshnessLevelLabels.title}</Text>
      </View>
      <View style={styles.chips}>
        {freshnessLevelLabels.levels.map((level, index) => {
          const isSelected = selectedFilter === index;
          return (
            <Pressable key={level} onPress={() => handleSelect(index, level)} style={[styles.chip, isSelected && styles.chipSelected]}>
              <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>{level}</Text>
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
  label: { fontSize: 14, fontWeight: '700', fontFamily: 'Archivo', color: '#565D6D' },
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
  chipText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#171A1F',
  },
  chipTextSelected: { color: '#FFFFFF' },
});
