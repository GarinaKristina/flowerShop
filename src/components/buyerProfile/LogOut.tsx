import React from 'react';
import { LogOut as LogOutIcon } from 'lucide-react-native';
import { MenuItem, ProfileMenuItems } from './ProfileMenu';
import { buyerProfileLabels } from '../../constants/mainInfo';

const LOGOUT_ITEMS: MenuItem[] = [{ key: 'logout', Icon: LogOutIcon, label: buyerProfileLabels.logout }];

export function LogOut() {
  return <ProfileMenuItems title={buyerProfileLabels.logOutTitle} items={LOGOUT_ITEMS} />;
}
