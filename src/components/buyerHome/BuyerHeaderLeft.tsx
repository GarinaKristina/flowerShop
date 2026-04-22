import { Zap } from 'lucide-react-native';
import { View } from 'react-native';

export function BuyerHeaderLeft() {
  return (
    <View>
      <View pointerEvents="none" style={{ marginRight: 12 }}>
        <Zap
          size={22}
          style={{ backgroundColor: '#150e0e', borderColor: '#3f4146' }}
        />
      </View>
    </View>
  );
}
