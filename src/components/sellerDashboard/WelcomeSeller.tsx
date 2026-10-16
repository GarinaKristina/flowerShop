import { StyleSheet, View } from 'react-native';
import { AvatarPicker } from '../common/ImagePicker';
import { ProSellerButton } from './ProSellerButton';
import { Typography } from '../common/Typography';

export function WelcomeSeller() {
  const seller = {
    sellerName: 'Welcome back, Sarah!',
    sellerShop: "Sarah's Blooms • Florist",
  };

  return (
    <View style={styles.row}>
      <AvatarPicker avatarType="seller" />
      <View style={styles.textContainer}>
        <Typography variant="h6">{seller.sellerName}</Typography>
        <Typography variant="caption">{seller.sellerShop}</Typography>
      </View>
      <ProSellerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    gap: 10,
  },
  textContainer: {
    flex: 1,
  },
});
