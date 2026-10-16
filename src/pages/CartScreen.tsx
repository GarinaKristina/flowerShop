import { PRIMARY_ICON_COLOR } from '../constants/colors';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { MessageSquare } from 'lucide-react-native';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { ActionButton } from '../components/common/ActionButton';
import { layoutStyles } from '../components/common/Typography';
import { CartItemCard } from '../components/cart/CartItemCard';
import { DeliveryBanner } from '../components/cart/DeliveryBanner';
import { OrderSummary } from '../components/cart/OrderSummary';
import { cartLabels } from '../constants/mainInfo';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { items, note, setNote, changeQuantity, removeItem, subtotal, deliveryCost, total } = useCart();

  return (
    <View style={layoutStyles.screen}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        {items.length === 0 ? (
          <Text style={styles.emptyText}>{cartLabels.emptyCart}</Text>
        ) : (
          <>
            {items.map(item => (
              <CartItemCard key={item.id} item={item} onChangeQuantity={changeQuantity} onRemove={removeItem} />
            ))}

            <View style={styles.noteHeader}>
              <MessageSquare size={14} color={PRIMARY_ICON_COLOR} />
              <Text style={styles.noteTitle}>{cartLabels.noteForFlorist}</Text>
            </View>
            <TextInput
              style={styles.noteInput}
              placeholder={cartLabels.notePlaceholder}
              placeholderTextColor="#565E6C"
              value={note}
              onChangeText={setNote}
              multiline
              textAlignVertical="top"
            />
            <Text style={styles.noteHint}>{cartLabels.noteHint}</Text>

            <DeliveryBanner />
            <OrderSummary subtotal={subtotal} deliveryCost={deliveryCost} total={total} />
            <ActionButton label={cartLabels.goToCheckout} style={styles.checkoutButton} />
          </>
        )}
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 96,
  },
  emptyText: {
    marginTop: 48,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#565E6C',
  },
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 16,
    marginTop: 24,
  },
  noteTitle: {
    fontFamily: 'Archivo',
    fontSize: 14,
    fontWeight: '700',
    color: '#171A1F',
  },
  noteInput: {
    height: 80,
    marginHorizontal: 16,
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#171A1F',
  },
  noteHint: {
    marginHorizontal: 16,
    marginTop: 10,
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 15,
    color: '#565E6C',
  },
  checkoutButton: {
    height: 52,
    marginHorizontal: 16,
    marginTop: 24,
  },
});
