import { StyleSheet, Text, View } from 'react-native';
import { AvatarPicker } from '../common/ImagePicker';
import { ProSellerButton } from './ProSellerButton';

export function WelcomeSeller() {
  const seller = {
    sellerName: 'Welcome back, Sarah!',
    sellerShop: "Sarah's Blooms • Florist",
  };

  return (
    <View style={styles.row}>
      <AvatarPicker avatarType="seller" />
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>{seller.sellerName}</Text>
        <Text style={styles.subText}>{seller.sellerShop}</Text>
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
  welcomeText: {
    fontFamily: 'Archivo',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  subText: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#565D6DFF',
  },
});
