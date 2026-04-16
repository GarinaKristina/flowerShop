import { Text, View } from 'react-native';
import { mainHeaderStyles } from '../styles/mainHeader';

export function SellerHome() {
  return (
    <View style={mainHeaderStyles.headerContainer}>
      <Text style={mainHeaderStyles.headerTitle}>Seller</Text>
    </View>
  );
}
