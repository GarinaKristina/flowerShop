import { ChevronRight, ClipboardList, Flower2, MessageSquare } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Alert = {
  icon: React.ReactNode;
  title: string;
  time: string;
  subtitle: string;
};

const alerts: Alert[] = [
  {
    icon: <ClipboardList size={20} color="#22CCB2" />,
    title: 'New Order #4892',
    time: '2m ago',
    subtitle: 'Customer: James Wilson • "Spring Bloom" x2',
  },
  {
    icon: <MessageSquare size={20} color="#E57373" />,
    title: 'New Message',
    time: '45m ago',
    subtitle: 'From Elena: "Do you offer delivery to Midtown?"',
  },
  {
    icon: <Flower2 size={20} color="#636AE8" />,
    title: 'Listing Performance',
    time: '1h ago',
    subtitle: '"Red Velvet Roses" reached 100+ views today!',
  },
];

const iconBg: Record<number, string> = {
  0: '#EEFCFA',
  1: '#FDF2F5',
  2: '#F2F2FD',
};

export function RecentAlerts() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent Alerts</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        {alerts.map((alert, index) => (
          <View key={alert.title}>
            <TouchableOpacity style={styles.row} activeOpacity={0.7}>
              <View style={[styles.iconWrap, { backgroundColor: iconBg[index] }]}>{alert.icon}</View>
              <View style={styles.content}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>{alert.title}</Text>
                  <Text style={styles.time}>{alert.time}</Text>
                </View>
                <Text style={styles.subtitle} numberOfLines={1}>
                  {alert.subtitle}
                </Text>
              </View>
              <ChevronRight size={16} color="#ABABAB" />
            </TouchableOpacity>
            {index < alerts.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: '#171A1F',
  },
  viewAll: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#636AE8',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#171a1f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: '#171A1F',
  },
  time: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#ABABAB',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#565D6D',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
  },
});
