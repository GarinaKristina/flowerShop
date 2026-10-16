import { ClipboardList, Flower2 } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';
import { sellerDashboardLabels } from '../../constants/mainInfo';
import { Typography } from '../common/Typography';

type SubStatisticProps = {
  label: string;
  statisticNumber: string;
  icon: typeof Flower2 | typeof ClipboardList;
};

export function SubStatistic({ label, statisticNumber, icon: Icon }: SubStatisticProps) {
  return (
    <View style={[styles.container, label !== sellerDashboardLabels.activeListings && styles.iconContainerAlt]}>
      <Typography variant="captionMedium" style={styles.label}>
        {label}
      </Typography>
      <Typography variant="h4" style={styles.amount}>
        {' '}
        {statisticNumber}
      </Typography>
      <View style={styles.iconContainer}>
        <Icon size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 171,
    height: 106,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DEE1E6FF',
    borderStyle: 'solid',
  },
  label: {
    marginTop: 10,
    marginLeft: 5,
    justifyContent: 'flex-start',
  },
  amount: {
    position: 'absolute',
    top: 53,
    left: 17,
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainerAlt: {
    backgroundColor: '#FBDFE8FF',
  },
});
