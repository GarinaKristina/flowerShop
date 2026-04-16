import React from 'react';
import { BuyerHome } from './src/pages/BuyerHome';
import { RoleSelection } from './src/pages/RoleSelection';
import { pages } from './src/constants/navigation';

import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: RoleSelection,
      options: {title: 'Welcome'},
    },
    Profile: {
      screen: BuyerHome,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (<Navigation />
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       <Stack.Screen name={pages.RoleSelection} component={RoleSelection} />
    //       <Stack.Screen name={pages.BuyerHome} component={BuyerHome} />

    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </SafeAreaProvider>
  );
}

export default App;