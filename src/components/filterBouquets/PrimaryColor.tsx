import { Check, Palette } from 'lucide-react-native';
import { Divider } from '../common/Divider';
import { Pressable, StyleSheet, View } from 'react-native';
import { layoutStyles, Typography } from '../common/Typography';
import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import { primaryColorLabels } from '../../constants/mainInfo';
import { useSelection } from '../../hooks/useSelection';

type PrimaryColorProps = {
  onChange: (value: string) => void;
};

export function PrimaryColor({ onChange }: PrimaryColorProps) {
  const { selectedFilter, selectNewFilter } = useSelection(1);

  const handleSelect = (index: number, value: string) => {
    selectNewFilter(index);
    onChange(value);
  };

  return (
    <View style={layoutStyles.filterSection}>
      <View style={layoutStyles.filterTitleRow}>
        <Palette size={20} color={PRIMARY_ICON_COLOR} />
        <Typography variant="filterTitle">{primaryColorLabels.primaryTitle}</Typography>
      </View>
      <View style={styles.options}>
        {primaryColorLabels.colors.map(({ name, hex }, index) => {
          const isSelected = selectedFilter === index;
          return (
            <Pressable key={name} onPress={() => handleSelect(index, name)} style={[styles.option, isSelected && styles.optionSelected]}>
              <View style={[styles.swatch, { backgroundColor: hex }]} />
              <Typography variant="subtitle1" style={styles.optionText}>
                {name}
              </Typography>
              {isSelected && <Check size={16} color={PRIMARY_ICON_COLOR} style={styles.check} />}
            </Pressable>
          );
        })}
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginBottom: 16,
  },
  option: {
    width: '31.5%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEE1E6',
  },
  optionSelected: { backgroundColor: '#F0F1FC', borderColor: PRIMARY_ICON_COLOR },
  swatch: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  optionText: {
    flex: 1,
  },
  check: { marginLeft: 'auto' },
});
