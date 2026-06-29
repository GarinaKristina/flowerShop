import React from 'react';
import { Bell, CreditCard, MapPin, User } from 'lucide-react-native';
import { MenuItem, ProfileMenuItems } from './ProfileMenu';

const ACCOUNT_ITEMS: MenuItem[] = [
  { key: 'personal', Icon: User, label: 'Personal Information' },
  { key: 'payment', Icon: CreditCard, label: 'Payment Methods' },
  { key: 'addresses', Icon: MapPin, label: 'Addresses' },
  { key: 'notifications', Icon: Bell, label: 'Notifications' },
];

export function AccountSettingsMenu() {
  return <ProfileMenuItems title="ACCOUNT SETTINGS" items={ACCOUNT_ITEMS} />;
}
