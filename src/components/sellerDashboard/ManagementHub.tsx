import { CirclePlus, Flower2, Star, Settings } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ManagementHubProps = {
  label: string;
  color: string;
  icon: typeof CirclePlus | typeof Flower2 | typeof Star | typeof Settings;
  onPress: () => void;
};

export function ManagementHub({ label, color, icon: Icon, onPress }: ManagementHubProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Icon size={24} />
      </View>
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: '#F2F2FDFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#171a1f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    marginTop: 6,
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#565D6DFF',
    textAlign: 'center',
  },
});
