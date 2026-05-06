import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BuyerHome } from './src/pages/BuyerHome';
import { RoleSelection } from './src/pages/RoleSelection';
import { SellerHome } from './src/pages/SellerHome';
import { pages, type RootStackParamList } from './src/constants/navigation';
import { BuyerHeaderRight } from './src/components/buyerHome/BuyerHeaderRight';
import { BuyerHeaderLeft } from './src/components/buyerHome/BuyerHeaderLeft';
import { CreateAccount } from './src/pages/CreateAccount';
import { BuyerAccount } from './src/pages/BuyerAccount';
import { SellerDashboard } from './src/pages/SellerDashboard';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
            headerLeft: BuyerHeaderLeft,
          }}
        />
        <Stack.Screen
          name={pages.RoleSelection}
          component={RoleSelection}
          options={{ title: 'Join BloomMarket' }}
        />
        <Stack.Screen
          name={pages.BuyerAccount}
          component={BuyerAccount}
        />
          <Stack.Screen
          name={pages.SellerDashboard}
          component={SellerDashboard}
        />
          <Stack.Screen
          name={pages.CreateAccount}
          component={CreateAccount}
          options={{ title: 'Create Account' }}
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
