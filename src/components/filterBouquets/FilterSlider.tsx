import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Divider } from '../common/Divider';
import { layoutStyles } from '../common/Typography';
import { MAX_PRICE as MAX, MIN_PRICE as MIN } from '../../hooks/useBouquetFilters';

type FilterSliderProps = {
  onChange: (value: number) => void;
};

export function FilterSlider({ onChange }: FilterSliderProps) {
  const [value, setValue] = useState(MIN);

  const handleChange = (next: number) => {
    setValue(next);
    onChange(Math.round(next));
  };

  return (
    <View style={layoutStyles.filterSection}>
      <Text style={styles.label}>PRICE RANGE: ${Math.round(value)}</Text>
      <Slider
        minimumValue={MIN}
        maximumValue={MAX}
        value={value}
        onValueChange={handleChange}
        minimumTrackTintColor="#CED0F8FF"
        thumbTintColor="#fefeff"
        thumbSize={20}
      />
      <View style={styles.rangeRow}>
        <Text style={styles.rangeText}>MIN ${MIN}</Text>
        <Text style={styles.rangeText}>MAX ${MAX}</Text>
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8, fontFamily: 'Archivo', color: '#565D6DFF' },
  rangeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  rangeText: { fontSize: 12, color: '#888' },
});
