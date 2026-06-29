import React from 'react';
import { FileText, Info, MessageCircle, Shield } from 'lucide-react-native';
import { MenuItem, ProfileMenuItems } from './ProfileMenu';

const SUPPORT_ITEMS: MenuItem[] = [
  { key: 'help', Icon: Info, label: 'Help Center' },
  { key: 'contact', Icon: MessageCircle, label: 'Contact Us' },
  { key: 'privacy', Icon: Shield, label: 'Privacy Policy' },
  { key: 'terms', Icon: FileText, label: 'Terms of Service' },
];

export function SupportMenu() {
  return <ProfileMenuItems title="SUPPORT" items={SUPPORT_ITEMS} />;
}
