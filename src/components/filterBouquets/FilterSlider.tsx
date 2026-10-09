import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Divider } from '../common/Divider';

const MIN = 15;
const MAX = 150;

export function FilterSlider() {
  const [value, setValue] = useState(MIN);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>PRICE RANGE: ${Math.round(value)}</Text>
      <Slider
        minimumValue={MIN}
        maximumValue={MAX}
        value={value}
        onValueChange={setValue}
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
  container: { paddingHorizontal: 16, paddingVertical: 16 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8, fontFamily: 'Archivo', color: '#565D6DFF' },
  rangeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  rangeText: { fontSize: 12, color: '#888' },
});
