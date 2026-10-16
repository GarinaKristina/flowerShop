import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Switch, View } from 'react-native';
import { useOpen } from '../../hooks/useOpenClose';
import { toggleCardStyles, ViewStyleProp } from '../../utils/styles';
import { Typography } from './Typography';

type ToggleCardProps = {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
  subtitle: string;
  initialValue?: boolean;
  onValueChange?: (isOn: boolean) => void;
  style?: ViewStyleProp;
  badgeStyle?: ViewStyleProp;
  iconColor?: string;
};

export function ToggleCard({
  Icon,
  title,
  subtitle,
  initialValue = false,
  onValueChange,
  style,
  badgeStyle,
  iconColor = '#FFFFFFFF',
}: ToggleCardProps) {
  const toggle = useOpen(initialValue);

  const handleChange = (next: boolean) => {
    if (next) {
      toggle.open();
    } else {
      toggle.close();
    }
    onValueChange?.(next);
  };

  return (
    <View style={[toggleCardStyles.container, style]}>
      <View style={[toggleCardStyles.iconBadge, badgeStyle]}>
        <Icon size={20} color={iconColor} />
      </View>
      <View style={toggleCardStyles.texts}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption">{subtitle}</Typography>
      </View>
      <Switch
        style={toggleCardStyles.switch}
        value={toggle.isOpen}
        onValueChange={handleChange}
        trackColor={{ false: '#BCC1CAFF', true: PRIMARY_ICON_COLOR }}
        thumbColor="#FFFFFFFF"
        ios_backgroundColor="#BCC1CAFF"
      />
    </View>
  );
}
