import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BuyerHome } from './src/pages/BuyerHome';
import { RoleSelection } from './src/pages/RoleSelection';
import { SellerHome } from './src/pages/SellerHome';
import { pages, type RootStackParamList } from './src/constants/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={pages.RoleSelection}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={pages.RoleSelection}
          component={RoleSelection}
          options={{ title: 'Join BloomMarket' }}
        />
        <Stack.Screen name={pages.BuyerHome} component={BuyerHome} />
        <Stack.Screen name={pages.SellerHome} component={SellerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
