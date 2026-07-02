import {  DollarSign, TrendingUp } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

export function RevenueToday() {
  return (
    <View style={styles.container}>
      <Text style={[styles.label]}>REVENUE TODAY</Text>
      <Text style={[styles.amount]}> $1,248.50</Text>
      <View style={[styles.statisticContainer]}>
        <TrendingUp size={20} color={tokens.iconColor} />
        <Text style={styles.statistic}> +12% from yesterday</Text>
      </View>
      <View style={styles.iconContainer}>
      <DollarSign size={16}/>
      </View>
    </View>
  );
}

const tokens = {
  iconColor: '#22CCB2FF',
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
    fontFamily: 'Inter',
    justifyContent: 'flex-start',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#565D6DFF',
  },
  amount: {
    position: 'absolute',
    top: 53,
    left: 17,
    fontFamily: 'Archivo',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
    color: '#171A1FFF',
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
  }
});
