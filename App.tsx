import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BuyerHome } from './src/pages/BuyerHome';
import { RoleSelection } from './src/pages/RoleSelection';
import { SellerHome } from './src/pages/SellerHome';
import { pages, type RootStackParamList } from './src/constants/navigation';
import { BuyerHeaderRight } from './src/components/buyerHome/BuyerHeaderRight';
import { BuyerHeaderLeft } from './src/components/buyerHome/BuyerHeaderLeft';
import { BuyerAccount } from './src/pages/BuyerAccount';
import { SellerDashboard } from './src/pages/SellerDashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search } from './src/pages/Search';
import { Favorites } from './src/pages/Favorites';
import { Cart } from './src/pages/Cart';
import { BottomNavigation } from './src/components/BottomNavigation';
import { SignIn } from './src/pages/SignIn';
import { SignUp } from './src/pages/SignUp';
import { BuyerProfileRight } from './src/components/buyerProfile/BuyerProfileRight';

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
        <Stack.Screen name={pages.RoleSelection} component={RoleSelection} options={{ title: 'Join BloomMarket' }} />
        <Stack.Screen
          name={pages.BuyerAccount}
          component={BuyerAccount}
          options={{ title: 'My Profile', headerRight: BuyerProfileRight }}
        />
        <Stack.Screen
          name={pages.SellerDashboard}
          component={SellerDashboard}
          options={{ title: 'Bloom Dashboard', headerRight: BuyerProfileRight }}
        />
        <Stack.Screen name={pages.SignIn} component={SignIn} options={{ title: 'Sign In' }} />
        <Stack.Screen name={pages.SignUp} component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name={pages.SellerHome} component={SellerHome} options={{ title: 'Seller' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator<RootStackParamList>();

export function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={BottomNavigation}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        name={pages.BuyerHome}
        component={BuyerHome}
        options={{
          title: '',
          headerRight: BuyerHeaderRight,
          headerLeft: BuyerHeaderLeft,
        }}
      />
      <Tab.Screen name={pages.Search} component={Search} options={{ title: 'Search' }} />
      <Tab.Screen name={pages.Favorites} component={Favorites} options={{ title: 'Favorites' }} />
      <Tab.Screen name={pages.Cart} component={Cart} options={{ title: 'Cart' }} />
      <Tab.Screen name={pages.BuyerAccount} component={BuyerAccount} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}
export default App;
