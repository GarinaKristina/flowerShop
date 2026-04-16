import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { UserRole } from '../components/UserRole';
import { buttonNames } from '../constants/ButtonNames';
import { mainHeader } from '../constants/MainHeader';
import {
  buyerRoleDescription,
  sellerRoleDescription,
} from '../constants/UserRoleDescription';
import { pages, type RootStackParamList } from '../constants/navigation';
import { mainHeaderStyles } from '../styles/mainHeader';

type SelectedRole = 'Buyer' | 'Seller' | null;

type RoleSelectionNav = NativeStackNavigationProp<RootStackParamList>;

export function RoleSelection() {
  const navigation = useNavigation<RoleSelectionNav>();
  const [selectedRole, setSelectedRole] = useState<SelectedRole>(null);

 const onContinue = () => {
    if (selectedRole === 'Buyer') {
      navigation.navigate(pages.BuyerHome);
      return;
    }
    if (selectedRole === 'Seller') {
      navigation.navigate(pages.SellerHome);
      return;
    }
   
  };
  return (
    <View style={styles.screen}>
      <SafeAreaView edges={['top']} style={mainHeaderStyles.headerContainer}>
        <Text style={mainHeaderStyles.headerTitle}>Join BloomMarket</Text>
      </SafeAreaView>
      <Text style={styles.mainTitle}>{mainHeader.title}</Text>
      <Text style={styles.description}>{mainHeader.description}</Text>
      <View style={styles.stack}>
        <View style={styles.item}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.item}
            onPress={() => setSelectedRole('Buyer')}
          >
            <UserRole
              userRole="Buyer"
              roleDescription={buyerRoleDescription.description}
              highlights={buyerRoleDescription.highlights}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.item}
          onPress={() => setSelectedRole('Seller')}
        >
          <UserRole
            userRole="Seller"
            roleDescription={sellerRoleDescription.description}
            highlights={sellerRoleDescription.highlights}
          />
        </TouchableOpacity>
      </View>
      <View>
       <TouchableOpacity
          style={styles.continueButton}
          disabled={!selectedRole}
          onPress={onContinue}
        >
          <Text style={styles.continueButtonText}>{buttonNames.continue}</Text>
          <View style={styles.buttonIcon}>
            <ArrowRight size={18} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stack: {
    alignSelf: 'stretch',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 260,
  },
  item: {
    marginBottom: 16,
  },

  mainTitle: {
    position: 'absolute',
    top: 132,
    left: 16,
    width: 264,
    fontFamily: 'Archivo',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '800',
    color: '#171A1FFF',
  },
  description: {
    position: 'absolute',
    top: 204,
    left: 16,
    width: 356,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#565D6DFF',
  },
  continueButton: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: -35,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6FF',
    opacity: 1,
    borderRadius: 16,
    borderWidth: 0,
    borderColor: '#000000FF',
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
  continueButtonText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '700',
    color: '#565D6DFF',
  },
  buttonIcon: {
    width: 20,
    height: 16,
    position: 'absolute',
    right: 120,
    tintColor: '#565D6DFF',
  },
  buttonHover: {
    color: '#565D6DFF',
    backgroundColor: '#F3F4F6FF',
  },
  buttonHoverActive: {
    color: '#565D6DFF',
    backgroundColor: '#F3F4F6FF',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
});
