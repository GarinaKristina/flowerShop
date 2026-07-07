import { ClipboardList, Flower2 } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

type SubStatisticProps = {
  label: string;
  statisticNumber: string;
  icon: typeof Flower2 | typeof ClipboardList;
};

export function SubStatistic({
  label,
  statisticNumber,
  icon: Icon,
}: SubStatisticProps) {
  return (
    <View
      style={[
        styles.container,
        label !== 'ACTIVE LISTINGS' && styles.iconContainerAlt,
      ]}
    >
      <Text style={[styles.label]}>{label}</Text>
      <Text style={[styles.amount]}> {statisticNumber}</Text>
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
    fontFamily: 'Inter',
    marginTop: 10,
    marginLeft: 5,
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
