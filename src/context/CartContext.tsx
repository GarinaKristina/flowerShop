import React, { createContext, useContext, useState } from 'react';
import { CartItem, DELIVERY_COST } from '../constants/mainInfo';

type CartContextValue = {
  items: CartItem[];
  note: string;
  setNote: (note: string) => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  changeQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  subtotal: number;
  deliveryCost: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [note, setNote] = useState('');

  function addItem(newItem: Omit<CartItem, 'quantity'>) {
    const existing = items.find(item => item.id === newItem.id);
    if (existing) {
      changeQuantity(newItem.id, 1);
    } else {
      setItems([...items, { ...newItem, quantity: 1 }]);
    }
  }

  function changeQuantity(id: string, delta: number) {
    setItems(items.map(item => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)));
  }

  function removeItem(id: string) {
    setItems(items.filter(item => item.id !== id));
  }

  function clear() {
    setItems([]);
  }

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryCost = items.length > 0 ? DELIVERY_COST : 0;

  const value = {
    items,
    note,
    setNote,
    addItem,
    changeQuantity,
    removeItem,
    clear,
    subtotal,
    deliveryCost,
    total: subtotal + deliveryCost,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return cart;
}
