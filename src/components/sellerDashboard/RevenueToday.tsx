import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import { DollarSign, TrendingUp } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { demoData, sellerDashboardLabels } from '../../constants/mainInfo';
import { Typography } from '../common/Typography';

export function RevenueToday() {
  return (
    <View style={styles.container}>
      <Typography variant="captionMedium" style={styles.label}>
        {sellerDashboardLabels.revenueToday}
      </Typography>
      <Typography variant="h4" style={styles.amount}>
        {demoData.revenueAmount}
      </Typography>
      <View style={[styles.statisticContainer]}>
        <TrendingUp size={20} color={tokens.iconColor} />
        <Text style={styles.statistic}>{demoData.revenueTrend}</Text>
      </View>
      <View style={styles.iconContainer}>
        <DollarSign size={16} color={tokens.dollarColor} />
      </View>
    </View>
  );
}

const tokens = {
  iconColor: '#22CCB2',
  dollarColor: PRIMARY_ICON_COLOR,
} as const;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    padding: 12,
    marginTop: 20,
    width: 390,
    height: 121,
    backgroundColor: '#F2F2FDFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#636AE833',
    borderStyle: 'solid',
  },
  label: {
    justifyContent: 'flex-start',
  },
  amount: {
    position: 'absolute',
    top: 53,
    left: 17,
  },
  statistic: {
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '600',
    color: '#22CCB2FF',
  },
  statisticContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
