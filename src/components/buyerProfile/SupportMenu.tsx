import React from 'react';
import { FileText, Info, MessageCircle, Shield } from 'lucide-react-native';
import { MenuItem, ProfileMenuItems } from './ProfileMenu';
import { buyerProfileLabels } from '../../constants/mainInfo';

const SUPPORT_ITEMS: MenuItem[] = [
  { key: 'help', Icon: Info, label: buyerProfileLabels.helpCenter },
  { key: 'contact', Icon: MessageCircle, label: buyerProfileLabels.contactUs },
  { key: 'privacy', Icon: Shield, label: buyerProfileLabels.privacyPolicy },
  { key: 'terms', Icon: FileText, label: buyerProfileLabels.termsOfService },
];

export function SupportMenu() {
  return <ProfileMenuItems title={buyerProfileLabels.supportTitle} items={SUPPORT_ITEMS} />;
}
