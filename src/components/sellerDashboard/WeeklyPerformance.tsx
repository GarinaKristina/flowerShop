import { TrendingUp } from 'lucide-react-native';
import { LineChart } from 'react-native-gifted-charts';
import { StyleSheet, Text, View } from 'react-native';

const data = [
  { value: 400 },
  { value: 340 },
  { value: 520 },
  { value: 450 },
  { value: 680 },
  { value: 820 },
  { value: 760 },
];

const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function WeeklyPerformance() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Weekly Performance</Text>
          <Text style={styles.subtitle}>7-day revenue overview</Text>
        </View>
        <View style={styles.badge}>
          <TrendingUp size={14} color="#22CCB2" />
          <Text style={styles.badgeText}> 18.4%</Text>
        </View>
      </View>

      <LineChart
        data={data}
        width={300}
        height={150}
        curved
        areaChart
        startFillColor="#636AE8"
        endFillColor="#636AE8"
        startOpacity={0.25}
        endOpacity={0.02}
        color="#636AE8"
        thickness={2.5}
        hideDataPoints
        xAxisLabelTexts={xLabels}
        xAxisLabelTextStyle={styles.axisLabel}
        yAxisTextStyle={styles.axisLabel}
        yAxisLabelSuffix=""
        noOfSections={4}
        maxValue={1000}
        rulesType="dashed"
        rulesColor="#E0E0E0"
        xAxisColor="transparent"
        yAxisColor="transparent"
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: '#171A1F',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#ABABAB',
    marginTop: 2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: '#22CCB2',
  },
  axisLabel: {
    fontSize: 10,
    color: '#ABABAB',
  },
});
