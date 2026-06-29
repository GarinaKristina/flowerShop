import React from 'react';
import { LogOut as LogOutIcon } from 'lucide-react-native';
import { MenuItem, ProfileMenuItems } from './ProfileMenu';

const LOGOUT_ITEMS: MenuItem[] = [
  { key: 'logout', Icon: LogOutIcon, label: 'Logout' },
];

export function LogOut() {
  return <ProfileMenuItems title="LOG OUT" items={LOGOUT_ITEMS} />;
}
