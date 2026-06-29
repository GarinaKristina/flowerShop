import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CreditCard, Heart, Package } from 'lucide-react-native';

type StatisticDashboardItemsProps = {
  onPressItem?: (key: string) => void;
};

const ITEMS = [
  { key: 'orders', Icon: Package, value: '12', label: 'ORDERS' },
  { key: 'favorites', Icon: Heart, value: '8', label: 'FAVORITES' },
  { key: 'wallet', Icon: CreditCard, value: '$45', label: 'WALLET' },
];

export function StatisticDashboardItems({
  onPressItem,
}: StatisticDashboardItemsProps) {
  return (
    <View style={styles.row}>
      {ITEMS.map(({ key, Icon, value, label }) => (
        <Pressable
          key={key}
          onPress={() => onPressItem?.(key)}
          style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        >
          <Icon size={16} color="#636AE8FF" style={styles.icon} />
          <Text style={styles.value}>{value}</Text>
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  container: {
    marginTop:10,
    width: 112,
    height: 103,
    backgroundColor: '#FFFFFFFF',
    borderRadius: 10,
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    position: 'absolute',
    top: 8,
    alignSelf: 'center',
    width: 16,
    height: 16,
  },
  value: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  label: {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '500',
    color: '#565D6DFF',
  },
});
