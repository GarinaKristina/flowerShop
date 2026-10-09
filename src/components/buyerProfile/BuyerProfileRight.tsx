import { Bell } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

export function BuyerProfileRight() {
  return (
    <View>
      <View>
        <Bell size={22} color="#3f4146" style={styles.bellIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bellIcon: {
    marginRight: 24,
  },
});
