export const pages = {
  RoleSelection: 'RoleSelection',
  BuyerHome: 'BuyerHome',
  SellerHome: 'SellerHome',
} as const;

export type RootStackParamList = {
  [pages.RoleSelection]: undefined;
  [pages.BuyerHome]: undefined;
  [pages.SellerHome]: undefined;
};
