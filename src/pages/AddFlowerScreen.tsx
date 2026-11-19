import React from 'react';
import { ScrollView } from 'react-native';
import { layoutStyles } from '../components/common/Typography';
import { AddPhoto } from '../components/addFlower/AddPhoto';
import { BasicInformation } from '../components/addFlower/BasicInformation';
import { FloralDetails } from '../components/addFlower/FloralDetails';
import { DeliveryAndPickup } from '../components/addFlower/DeliveryAndPickup';
import { ListingActions } from '../components/addFlower/ListingActions';

export function AddFlower() {
  return (
    <ScrollView style={layoutStyles.screen} showsVerticalScrollIndicator={false}>
      <AddPhoto />
      <BasicInformation />
      <FloralDetails />
      <DeliveryAndPickup />
      <ListingActions />
    </ScrollView>
  );
}
