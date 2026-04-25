import { Zap } from 'lucide-react-native';
import { StyleSheet, View } from 'react-native';

export function BuyerHeaderLeft() {
  return (
    <View>
      <View pointerEvents="none" style={styles.container}>
        <Zap
          size={22}
           color="#FFFFFF"
          style={styles.iconBackground}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { marginRight: 12 },
  iconBackground: { backgroundColor: '#170f0ff3', borderColor: '#030305' }
});