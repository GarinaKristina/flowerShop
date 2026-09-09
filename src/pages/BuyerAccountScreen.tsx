import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AvatarPicker } from '../components/common/ImagePicker';
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
          <Text style={styles.nameStyle}>{user.name}</Text>
          <Text style={styles.emailStyle}>{user.email}</Text>
        </View>
        <EditProfileButton onPress={handleEditProfile} />
        <StatisticDashboardItems />
        <SellerModeCard />
        <AccountSettingsMenu />
        <SupportMenu />
        <LogOut />
        <View>
          <Text style={styles.buildText}>{appVersionData}</Text>
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
  nameStyle: {
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  emailStyle: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#565D6DFF',
  },
  buildText: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '400',
    color: '#565D6DFF',
  },
});
