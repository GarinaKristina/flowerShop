import { useNavigation } from '@react-navigation/native';
import { Bell, CircleUserRound } from 'lucide-react-native';
import { View, Pressable } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { pages, RootStackParamList } from '../../constants/navigation';

type RootNav = NativeStackNavigationProp<RootStackParamList>;

export function BuyerHeaderRight() {
  const navigation = useNavigation<RootNav>();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View>
        <Bell size={22} color="#3f4146" style={{ marginRight: 24 }} />
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate(pages.RoleSelection)}>
          <CircleUserRound size={22} color="#3f4146" />
        </Pressable>
      </View>
    </View>
  );
}
