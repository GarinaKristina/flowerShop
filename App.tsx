import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BuyerHome } from './src/pages/BuyerHome';
import { RoleSelection } from './src/pages/RoleSelection';
import type { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Join" component={RoleSelection} />
          <Stack.Screen name="BuyerStack" component={BuyerHome} />
          {/* <Stack.Screen name="SellerStack" component={BuyerHome} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
