import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CreditCard, Heart, Package } from 'lucide-react-native';
import { buyerProfileLabels, demoData } from '../../constants/mainInfo';
import { Typography } from '../common/Typography';

type StatisticDashboardItemsProps = {
  onPressItem?: (key: string) => void;
};

const ITEMS = [
  { key: 'orders', Icon: Package, value: demoData.ordersCount, label: buyerProfileLabels.orders },
  { key: 'favorites', Icon: Heart, value: demoData.favoritesCount, label: buyerProfileLabels.favorites },
  { key: 'wallet', Icon: CreditCard, value: demoData.walletAmount, label: buyerProfileLabels.wallet },
];

export function StatisticDashboardItems({ onPressItem }: StatisticDashboardItemsProps) {
  return (
    <View style={styles.row}>
      {ITEMS.map(({ key, Icon, value, label }) => (
        <Pressable key={key} onPress={() => onPressItem?.(key)} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
          <Icon size={16} color={PRIMARY_ICON_COLOR} style={styles.icon} />
          <Typography variant="statValue" style={styles.value}>
            {value}
          </Typography>
          <Typography variant="overline" style={styles.label}>
            {label}
          </Typography>
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
    marginTop: 10,
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
  },
  label: {
    position: 'absolute',
    top: 76,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
});
