import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Switch, View } from 'react-native';
import { Store } from 'lucide-react-native';
import { Typography } from '../common/Typography';
import { useOpen } from '../../hooks/useOpenClose';
import { buyerProfileLabels } from '../../constants/mainInfo';
import { toggleCardStyles } from '../../utils/styles';

type SellerModeCardProps = {
  onValueChange?: (isOn: boolean) => void;
};

export function SellerModeCard({ onValueChange }: SellerModeCardProps) {
  const sellerMode = useOpen();

  const handleChange = (next: boolean) => {
    if (next) {
      sellerMode.open();
    } else {
      sellerMode.close();
    }
    onValueChange?.(next);
  };

  return (
    <View style={toggleCardStyles.container}>
      <View style={toggleCardStyles.iconBadge}>
        <Store size={20} color="#FFFFFFFF" />
      </View>
      <View style={toggleCardStyles.texts}>
        <Typography variant="subtitle2">{buyerProfileLabels.sellerMode}</Typography>
        <Typography variant="caption">{buyerProfileLabels.sellerModeDescription}</Typography>
      </View>
      <Switch
        style={toggleCardStyles.switch}
        value={sellerMode.isOpen}
        onValueChange={handleChange}
        trackColor={{ false: '#BCC1CAFF', true: PRIMARY_ICON_COLOR }}
        thumbColor="#FFFFFFFF"
        ios_backgroundColor="#BCC1CAFF"
      />
    </View>
  );
}
