import { Text, View } from 'react-native';
import { screenTitles } from '../constants/mainInfo';

export function SellerHome() {
  return (
    <View>
      <Text>{screenTitles.seller}</Text>
    </View>
  );
}
