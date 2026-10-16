import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Info, MapPin, Timer, Truck } from 'lucide-react-native';
import { BouquetDetails, detailsLabels } from '../../constants/mainInfo';
import { Divider } from '../common/Divider';

type DeliveryInfoProps = {
  bouquet: BouquetDetails;
};

type InfoCellProps = {
  icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  value: string;
};

function InfoCell({ icon: Icon, label, value }: InfoCellProps) {
  return (
    <View style={styles.cell}>
      <View style={styles.iconCircle}>
        <Icon size={18} color={PRIMARY_ICON_COLOR} />
      </View>
      <View style={styles.cellText}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

export function DeliveryInfo({ bouquet }: DeliveryInfoProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <InfoCell icon={Truck} label={detailsLabels.delivery} value={bouquet.delivery} />
        <InfoCell icon={MapPin} label={detailsLabels.location} value={bouquet.location} />
      </View>
      <Divider />
      <View style={styles.row}>
        <InfoCell icon={Timer} label={detailsLabels.waitTime} value={bouquet.waitTime} />
        <InfoCell icon={Info} label={detailsLabels.occasion} value={bouquet.occasion} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FAFAFB',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    gap: 12,
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8EAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    flex: 1,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 11,
    color: '#565E6C',
  },
  value: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '600',
    color: '#171A1F',
  },
});
