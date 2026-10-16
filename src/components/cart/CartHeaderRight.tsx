import { Pressable, StyleSheet, Text } from 'react-native';
import { cartLabels } from '../../constants/mainInfo';
import { useCart } from '../../context/CartContext';

export function CartHeaderRight() {
  const { clear } = useCart();

  return (
    <Pressable onPress={clear}>
      <Text style={styles.clearText}>{cartLabels.clear}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  clearText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    color: '#EF4444',
  },
});
