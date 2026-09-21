import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Store, Truck } from 'lucide-react-native';
import { ToggleCard } from '../common/ToggleCard';
import { deliveryLabels } from '../../constants/mainInfo';

export function DeliveryAndPickup() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{deliveryLabels.title}</Text>

      <ToggleCard
        Icon={Truck}
        title={deliveryLabels.homeDelivery}
        subtitle={deliveryLabels.homeDeliveryDescription}
        initialValue
        style={styles.card}
        badgeStyle={styles.deliveryBadge}
        iconColor="#636AE8"
      />

      <ToggleCard
        Icon={Store}
        title={deliveryLabels.inStorePickup}
        subtitle={deliveryLabels.inStorePickupDescription}
        initialValue
        style={styles.card}
        badgeStyle={styles.pickupBadge}
        iconColor="#E57373"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#171A1FFF',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  card: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  deliveryBadge: {
    backgroundColor: '#F2F2FD',
  },
  pickupBadge: {
    backgroundColor: '#FDF2F5',
  },
});
