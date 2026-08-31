import { Heart, House, Search, ShoppingCart, UserRound } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { pages } from '../constants/navigation';

type MenuButtonProps = {
  icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

function MenuButton({ icon: Icon, label, isSelected, onPress }: MenuButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon size={24} color={isSelected ? '#636AE8' : '#565E6C'} />
      <Text style={[styles.text, isSelected && styles.textSelected]}>{label}</Text>
    </TouchableOpacity>
  );
}

export function BottomNavigation(props?: Partial<BottomTabBarProps>) {
  const state = props?.state;
  const navigation = props?.navigation;
  const tabs = [
    { route: pages.BuyerHome, icon: House, label: 'Home' },
    { route: pages.Search, icon: Search, label: 'Search' },
    { route: pages.Favorites, icon: Heart, label: 'Favorites' },
    { route: pages.Cart, icon: ShoppingCart, label: 'Cart' },
    { route: pages.BuyerAccount, icon: UserRound, label: 'Profile' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <MenuButton
          key={tab.route}
          icon={tab.icon}
          label={tab.label}
          isSelected={state?.index === index}
          onPress={() => navigation?.navigate(tab.route)}
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
    color: '#636AE8',
  },
});
