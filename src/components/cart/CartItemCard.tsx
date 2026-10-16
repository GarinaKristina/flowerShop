import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import { CartItem } from '../../constants/mainInfo';
import { QuantityStepper } from './QuantityStepper';

type CartItemCardProps = {
  item: CartItem;
  onChangeQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
};

export function CartItemCard({ item, onChangeQuantity, onRemove }: CartItemCardProps) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <View style={styles.topRow}>
          <View style={styles.titleBlock}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <Pressable style={styles.removeButton} onPress={() => onRemove(item.id)} hitSlop={8}>
            <Trash2 size={13} color="#EF4444" />
          </Pressable>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{item.unitPrice * item.quantity}</Text>
          <QuantityStepper
            quantity={item.quantity}
            onDecrease={() => onChangeQuantity(item.id, -1)}
            onIncrease={() => onChangeQuantity(item.id, 1)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 14,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#171A1F',
  },
  category: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#565E6C',
  },
  removeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FDE8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'Archivo',
    fontSize: 16,
    fontWeight: '700',
    color: PRIMARY_ICON_COLOR,
  },
});
