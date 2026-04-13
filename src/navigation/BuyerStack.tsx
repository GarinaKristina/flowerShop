import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BuyerHome } from '../pages/BuyerHome';

export type BuyerStackParamList = {
  BuyerHome: undefined;
};

const Stack = createNativeStackNavigator<BuyerStackParamList>();

export function BuyerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BuyerHome" component={BuyerHome} />
    </Stack.Navigator>
  );
}