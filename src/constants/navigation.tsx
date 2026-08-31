export const pages = {
  RoleSelection: 'RoleSelection',
  BuyerHome: 'BuyerHome',
  SellerHome: 'SellerHome',
  BuyerAccount: 'BuyerAccount',
  SellerDashboard: 'SellerDashboard',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Search: 'Search',
  Favorites: 'Favorites',
  Cart: 'Cart',
  MainTabs: 'MainTabs',
} as const;

export type RootStackParamList = {
  [pages.RoleSelection]: undefined;
  [pages.BuyerHome]: undefined;
  [pages.SellerHome]: undefined;
  [pages.BuyerAccount]: undefined;
  [pages.SellerDashboard]: undefined;
  [pages.SignIn]: undefined;
  [pages.SignUp]: undefined;
  [pages.Search]: undefined;
  [pages.Favorites]: undefined;
  [pages.Cart]: undefined;
  [pages.MainTabs]: undefined;
};
