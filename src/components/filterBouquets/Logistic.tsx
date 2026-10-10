import { Clock, ShoppingBag, Truck } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ToggleCard } from '../common/ToggleCard';
import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import { logisticLabels } from '../../constants/mainInfo';

const NEUTRAL_ICON_COLOR = '#565D6D';

type LogisticProps = {
  onChange: (key: 'instant' | 'delivery' | 'pickup', value: boolean) => void;
};

export function Logistic({ onChange }: LogisticProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Clock size={18} color={PRIMARY_ICON_COLOR} />
        <Text style={styles.label}>{logisticLabels.title}</Text>
      </View>

      <ToggleCard
        Icon={Clock}
        title={logisticLabels.instantAvailability}
        subtitle={logisticLabels.instantAvailabilityDescription}
        onValueChange={value => onChange('instant', value)}
        style={styles.card}
        badgeStyle={styles.neutralBadge}
        iconColor={NEUTRAL_ICON_COLOR}
      />
      <ToggleCard
        Icon={Truck}
        title={logisticLabels.deliveryAvailable}
        subtitle={logisticLabels.deliveryAvailableDescription}
        initialValue
        onValueChange={value => onChange('delivery', value)}
        style={styles.card}
        badgeStyle={styles.primaryBadge}
        iconColor={PRIMARY_ICON_COLOR}
      />
      <ToggleCard
        Icon={ShoppingBag}
        title={logisticLabels.localPickup}
        subtitle={logisticLabels.localPickupDescription}
        onValueChange={value => onChange('pickup', value)}
        style={styles.card}
        badgeStyle={styles.neutralBadge}
        iconColor={NEUTRAL_ICON_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 16 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16 },
  label: { fontSize: 14, fontWeight: '700', fontFamily: 'Archivo', color: '#565D6D' },
  card: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  neutralBadge: { backgroundColor: '#F3F4F6' },
  primaryBadge: { backgroundColor: '#F2F2FD' },
});
