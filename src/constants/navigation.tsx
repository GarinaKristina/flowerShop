
export const pages = {
  RoleSelection: 'RoleSelection',
  BuyerHome: 'BuyerHome',
  SellerHome: 'SellerHome',
  CreateAccount: 'CreateAccount',
  BuyerAccount: 'BuyerAccount',
  SellerDashboard: 'SellerDashboard',
} as const;

export type RootStackParamList = {
  [pages.RoleSelection]: undefined;
  [pages.BuyerHome]: undefined;
  [pages.SellerHome]: undefined;
  [pages.CreateAccount]: undefined;
  [pages.BuyerAccount]: undefined;
  [pages.SellerDashboard]: undefined;
};
