import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Store, Truck } from 'lucide-react-native';
import { ToggleCard } from '../common/ToggleCard';
import { Typography } from '../common/Typography';
import { deliveryLabels } from '../../constants/mainInfo';

export function DeliveryAndPickup() {
  return (
    <View style={styles.section}>
      <Typography variant="subtitle2" style={styles.title}>
        {deliveryLabels.title}
      </Typography>

      <ToggleCard
        Icon={Truck}
        title={deliveryLabels.homeDelivery}
        subtitle={deliveryLabels.homeDeliveryDescription}
        initialValue
        style={styles.card}
        badgeStyle={styles.deliveryBadge}
        iconColor={PRIMARY_ICON_COLOR}
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
