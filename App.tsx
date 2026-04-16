import React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CircleUserRound } from 'lucide-react-native';

import { BuyerHome } from './src/pages/BuyerHome';
import { RoleSelection } from './src/pages/RoleSelection';
import { SellerHome } from './src/pages/SellerHome';
import { pages, type RootStackParamList } from './src/constants/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootNav = NativeStackNavigationProp<RootStackParamList>;

function BuyerHeaderRight() {
  const navigation = useNavigation<RootNav>();

  return (
    <Pressable
      onPress={() => navigation.navigate(pages.RoleSelection)}
      hitSlop={10}
    >
      <CircleUserRound size={22} color="#3f4146" />
    </Pressable>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={pages.BuyerHome}
        screenOptions={{
          headerShown: true,
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen
          name={pages.BuyerHome}
          component={BuyerHome}
          options={{
            title: '',
            headerRight: BuyerHeaderRight,
          }}
        />
        <Stack.Screen
          name={pages.RoleSelection}
          component={RoleSelection}
          options={{ title: 'Join BloomMarket' }}
        />
        
        <Stack.Screen
          name={pages.SellerHome}
          component={SellerHome}
          options={{ title: 'Seller' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
