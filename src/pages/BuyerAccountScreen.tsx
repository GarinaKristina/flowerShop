import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { AvatarPicker } from '../components/common/ImagePicker';
import { Typography } from '../components/common/Typography';
import { EditProfileButton } from '../components/buyerProfile/EditProfileButton';
import { StatisticDashboardItems } from '../components/buyerProfile/StatisticDashboardItems';
import { SellerModeCard } from '../components/buyerProfile/SellerModeCard';
import { AccountSettingsMenu } from '../components/buyerProfile/AccountSettingsMenu';
import { SupportMenu } from '../components/buyerProfile/SupportMenu';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { LogOut } from '../components/buyerProfile/LogOut';
import { appVersionData } from '../constants/mainInfo';

export function BuyerAccount() {
  const handleEditProfile = () => {
    console.log('Edit profile pressed');
  };

  const user = {
    name: 'Sarah Jenkins',
    email: 'sarah.j@bloommarket.com',
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarCOntainer}>
          <AvatarPicker avatarType="buyer" />
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="body2">{user.email}</Typography>
        </View>
        <EditProfileButton onPress={handleEditProfile} />
        <StatisticDashboardItems />
        <SellerModeCard />
        <AccountSettingsMenu />
        <SupportMenu />
        <LogOut />
        <View>
          <Typography variant="caption2" style={styles.buildText}>
            {appVersionData}
          </Typography>
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  avatarCOntainer: {
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buildText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
