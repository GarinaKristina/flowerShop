import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cartLabels } from '../../constants/mainInfo';
import { Divider } from '../common/Divider';

type OrderSummaryProps = {
  subtotal: number;
  deliveryCost: number;
  total: number;
};

export function OrderSummary({ subtotal, deliveryCost, total }: OrderSummaryProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>{cartLabels.itemsSubtotal}</Text>
        <Text style={styles.value}>${subtotal}</Text>
      </View>
      <View style={[styles.row, styles.secondRow]}>
        <Text style={styles.label}>{cartLabels.deliveryCost}</Text>
        <Text style={styles.value}>${deliveryCost}</Text>
      </View>
      <Divider />
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>{cartLabels.grandTotal}</Text>
        <View style={styles.totalValueBlock}>
          <Text style={styles.totalValue}>${total}</Text>
          <Text style={styles.vat}>{cartLabels.includingVat}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondRow: {
    marginTop: 12,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#565E6C',
  },
  value: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '700',
    color: '#171A1F',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  totalLabel: {
    fontFamily: 'Archivo',
    fontSize: 16,
    fontWeight: '700',
    color: '#171A1F',
  },
  totalValueBlock: {
    alignItems: 'flex-end',
  },
  totalValue: {
    fontFamily: 'Archivo',
    fontSize: 20,
    fontWeight: '700',
    color: PRIMARY_ICON_COLOR,
  },
  vat: {
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#565E6C',
  },
});
