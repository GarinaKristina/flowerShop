import React from 'react';
import { Bell, CreditCard, MapPin, User } from 'lucide-react-native';
import { MenuItem, ProfileMenuItems } from './ProfileMenu';
import { buyerProfileLabels } from '../../constants/mainInfo';

const ACCOUNT_ITEMS: MenuItem[] = [
  { key: 'personal', Icon: User, label: buyerProfileLabels.personalInformation },
  { key: 'payment', Icon: CreditCard, label: buyerProfileLabels.paymentMethods },
  { key: 'addresses', Icon: MapPin, label: buyerProfileLabels.addresses },
  { key: 'notifications', Icon: Bell, label: buyerProfileLabels.notifications },
];

export function AccountSettingsMenu() {
  return <ProfileMenuItems title={buyerProfileLabels.accountSettingsTitle} items={ACCOUNT_ITEMS} />;
}
