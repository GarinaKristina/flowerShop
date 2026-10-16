import { Bell, CircleUserRound } from 'lucide-react-native';
import { StyleSheet, View, Pressable } from 'react-native';

import { pages } from '../../constants/navigation';
import { useAppNavigation } from '../../hooks/useAppNavigation';

export function BuyerHeaderRight() {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Bell size={22} color="#3f4146" style={styles.bellIcon} />
      </View>
      <View>
        {/* <Pressable onPress={() => navigation.navigate(pages.RoleSelection)}> */}
        <Pressable onPress={() => navigation.navigate(pages.SignIn)}>
          <CircleUserRound size={22} color="#3f4146" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    marginRight: 24,
  },
});
