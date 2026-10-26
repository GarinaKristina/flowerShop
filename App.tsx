import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BuyerHome } from './src/pages/BuyerHomeScreen';
import { RoleSelection } from './src/pages/RoleSelectionScreen';
import { SellerHome } from './src/pages/SellerHomeScreen';
import { pages, type RootStackParamList } from './src/constants/navigation';
import { BuyerHeaderRight } from './src/components/buyerHome/BuyerHeaderRight';
import { BuyerHeaderLeft } from './src/components/buyerHome/BuyerHeaderLeft';
import { BuyerAccount } from './src/pages/BuyerAccountScreen';
import { SellerDashboard } from './src/pages/SellerDashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search } from './src/pages/SearchScreen';
import { Favorites } from './src/pages/FavoritesScreen';
import { Cart } from './src/pages/CartScreen';
import { BottomNavigation } from './src/components/common/BottomNavigation';
import { SignIn } from './src/pages/SignInScreen';
import { SignUp } from './src/pages/SignUpScreen';
import { BuyerProfileRight } from './src/components/buyerProfile/BuyerProfileRight';
import { AddFlower } from './src/pages/AddFlowerScreen';
import { Listings } from './src/pages/ListingsScreen';
import { Reviews } from './src/pages/ReviewsScreen';
import { Settings } from './src/pages/SettingsScreen';
import { FilterBouquets } from './src/pages/FilterBouquets';
import { Details } from './src/pages/DetailsScreen';
import { DetailsHeaderRight } from './src/components/details/DetailsHeaderRight';
import { cartLabels, detailsLabels } from './src/constants/mainInfo';
import { CartHeaderRight } from './src/components/cart/CartHeaderRight';
import { CartProvider } from './src/context/CartContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { getAuth, signInAnonymously } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator<RootStackParamList>();

signInAnonymously(getAuth())
  .then(() => console.log('Вошли анонимно!'))
  .catch(console.error);

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
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
            <Stack.Screen name={pages.Search} component={Search} options={{ title: 'Search' }} />
            <Stack.Screen name={pages.Favorites} component={Favorites} options={{ title: 'Favorites' }} />
            <Stack.Screen name={pages.Cart} component={Cart} options={{ title: cartLabels.title, headerRight: CartHeaderRight }} />
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
            <Stack.Screen name={pages.FilterBouquets} component={FilterBouquets} options={{ title: 'Filter Bouquets' }} />
            <Stack.Screen
              name={pages.Details}
              component={Details}
              options={{ title: detailsLabels.title, headerRight: DetailsHeaderRight }}
            />
            <Stack.Screen name={pages.SignIn} component={SignIn} options={{ title: 'Sign In' }} />
            <Stack.Screen name={pages.SignUp} component={SignUp} options={{ title: 'Sign Up' }} />
            <Stack.Screen name={pages.SellerHome} component={SellerHome} options={{ title: 'Seller' }} />
            <Stack.Screen name={pages.AddFlower} component={AddFlower} options={{ title: 'Add Bouquet' }} />
            <Stack.Screen name={pages.Listings} component={Listings} options={{ title: 'My Flowers' }} />
            <Stack.Screen name={pages.Reviews} component={Reviews} options={{ title: 'Reviews' }} />
            <Stack.Screen name={pages.Settings} component={Settings} options={{ title: 'Settings' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </CartProvider>
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
