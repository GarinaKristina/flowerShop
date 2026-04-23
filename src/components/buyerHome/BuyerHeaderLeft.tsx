import { Zap } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

export function BuyerHeaderLeft() {
  return (
    <View>
      <View pointerEvents="none" style={styles.container}>
        <Zap
          size={22}
          style={styles.iconBackground}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { marginRight: 12 },
  iconBackground: { backgroundColor: '#150e0ef3', borderColor: '#3f4146' }
});