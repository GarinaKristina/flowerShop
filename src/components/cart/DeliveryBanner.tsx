import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ChevronRight, Truck } from 'lucide-react-native';
import { cartLabels } from '../../constants/mainInfo';

export function DeliveryBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Truck size={18} color={PRIMARY_ICON_COLOR} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{cartLabels.nextDayDelivery}</Text>
        <Text style={styles.hint}>{cartLabels.nextDayDeliveryHint}</Text>
      </View>
      <ChevronRight size={18} color="#565E6C" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 16,
    marginTop: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F0F1FD',
    borderWidth: 1,
    borderColor: '#E1E3FA',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E1E3FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
    color: '#171A1F',
  },
  hint: {
    fontFamily: 'Inter',
    fontSize: 11,
    color: '#565E6C',
  },
});
