import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { ListingItem } from '../../constants/mainInfo';
import { listingsDemoData } from '../../pages/ListingsScreen';
import { ListingCard } from './ListingCard';

const HORIZONTAL_PADDING = 16;
const COLUMN_GAP = 16;
const COLUMNS = 2;

type ListingsGridProps = {
  listings?: ListingItem[];
};

export function ListingsGrid({ listings = listingsDemoData }: ListingsGridProps) {
  const { width } = useWindowDimensions();
  const cardSize = (width - HORIZONTAL_PADDING * 2 - COLUMN_GAP * (COLUMNS - 1)) / COLUMNS;

  return (
    <View style={styles.grid}>
      {listings.map(listing => (
        <ListingCard key={listing.id} listing={listing} style={{ width: cardSize }} imageStyle={{ width: cardSize, height: cardSize }} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: COLUMN_GAP,
    rowGap: 20,
    marginTop: 12,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
});
