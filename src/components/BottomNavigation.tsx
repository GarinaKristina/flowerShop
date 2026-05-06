import {
  Heart,
  House,
  Search,
  ShoppingCart,
  UserRound,
} from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MenuButtonProps = {
  icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};
function MenuButton({ icon: Icon, label, isSelected, onPress }: MenuButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress}
    >
      <Icon 
        size={24} 
        color={isSelected ? '#636AE8' : '#565E6C'} 
      />
      <Text style={[
        styles.text,
        isSelected && styles.textSelected
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function BottomNavigation() {
  const [selected, setSelected] = useState(0);

  
  return (
    <View style={styles.container}>
       <MenuButton 
        icon={House} 
        label="Home" 
        isSelected={selected === 0}
        onPress={() => setSelected(0)}
      />
       <MenuButton 
        icon={Search} 
        label="Search" 
        isSelected={selected === 1}
        onPress={() => setSelected(1)}
      />
       <MenuButton 
        icon={Heart} 
        label="Favorites" 
        isSelected={selected === 2}
        onPress={() => setSelected(2)}
      />
       <MenuButton 
        icon={ShoppingCart} 
        label="Cart" 
        isSelected={selected === 3}
        onPress={() => setSelected(3)}
      />
       <MenuButton 
        icon={UserRound} 
        label="Profile" 
        isSelected={selected === 4}
        onPress={() => setSelected(4)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 4,
    left: 0,
    width: 390,
    height: 64,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'center',
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
