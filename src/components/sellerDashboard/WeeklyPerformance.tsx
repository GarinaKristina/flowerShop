import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import { TrendingUp } from 'lucide-react-native';
import { LineChart } from 'react-native-gifted-charts';
import { StyleSheet, View } from 'react-native';
import { demoData, sellerDashboardLabels } from '../../constants/mainInfo';
import { Typography } from '../common/Typography';

const data = [{ value: 400 }, { value: 340 }, { value: 520 }, { value: 450 }, { value: 680 }, { value: 820 }, { value: 760 }];

const xLabels = sellerDashboardLabels.weekDays;

export function WeeklyPerformance() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Typography variant="body1Bold">{sellerDashboardLabels.weeklyPerformance}</Typography>
          <Typography variant="captionMuted" style={styles.subtitle}>
            {sellerDashboardLabels.weeklyPerformanceSubtitle}
          </Typography>
        </View>
        <View style={styles.badge}>
          <TrendingUp size={14} color="#22CCB2" />
          <Typography variant="body2Bold" color="#22CCB2">
            {demoData.weeklyPerformanceTrend}
          </Typography>
        </View>
      </View>

      <LineChart
        data={data}
        width={300}
        height={150}
        curved
        areaChart
        startFillColor={PRIMARY_ICON_COLOR}
        endFillColor={PRIMARY_ICON_COLOR}
        startOpacity={0.25}
        endOpacity={0.02}
        color={PRIMARY_ICON_COLOR}
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
  subtitle: {
    marginTop: 2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  axisLabel: {
    fontSize: 10,
    color: '#ABABAB',
  },
});
