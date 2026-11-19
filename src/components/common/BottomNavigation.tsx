import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import { Heart, House, Search, ShoppingCart, UserRound } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { pages } from '../../constants/navigation';
import { bottomNavigationLabels } from '../../constants/mainInfo';

type MenuButtonProps = {
  icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

function MenuButton({ icon: Icon, label, isSelected, onPress }: MenuButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon size={24} color={isSelected ? PRIMARY_ICON_COLOR : '#565E6C'} />
      <Text style={[styles.text, isSelected && styles.textSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

export function BottomNavigation() {
  const navigation = useAppNavigation();
  const { name: currentRoute } = useRoute();
  const tabs = [
    { route: pages.BuyerHome, icon: House, label: bottomNavigationLabels.home },
    { route: pages.Search, icon: Search, label: bottomNavigationLabels.search },
    { route: pages.Favorites, icon: Heart, label: bottomNavigationLabels.favorites },
    { route: pages.Cart, icon: ShoppingCart, label: bottomNavigationLabels.cart },
    { route: pages.BuyerAccount, icon: UserRound, label: bottomNavigationLabels.profile },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <MenuButton
          key={tab.route}
          icon={tab.icon}
          label={tab.label}
          isSelected={currentRoute === tab.route}
          onPress={() => navigation.navigate(tab.route)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '400',
    color: '#565E6C',
    marginTop: 4,
  },
  textSelected: {
    fontWeight: '700',
    color: PRIMARY_ICON_COLOR,
  },
});
