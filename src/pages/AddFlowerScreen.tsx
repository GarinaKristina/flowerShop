import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AddPhoto } from '../components/addFlower/AddPhoto';
import { BasicInformation } from '../components/addFlower/BasicInformation';
import { FloralDetails } from '../components/addFlower/FloralDetails';
import { DeliveryAndPickup } from '../components/addFlower/DeliveryAndPickup';
import { ListingActions } from '../components/addFlower/ListingActions';

export function AddFlower() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AddPhoto />
      <BasicInformation />
      <FloralDetails />
      <DeliveryAndPickup />
      <ListingActions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
