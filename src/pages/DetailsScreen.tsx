import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ShoppingBag } from 'lucide-react-native';
import { PRIMARY_ICON_COLOR } from '../constants/colors';
import { BouquetDetails, bouquetDetailsDemo, detailsLabels } from '../constants/mainInfo';
import { pages } from '../constants/navigation';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { useCart } from '../context/CartContext';
import { useAppNavRoute } from '../hooks/useAppNavRoute';
import { listingsDemoData } from './ListingsScreen';
import { ActionButton } from '../components/common/ActionButton';
import { ImageCarousel } from '../components/details/ImageCarousel';
import { BouquetSummary } from '../components/details/BouquetSummary';
import { DeliveryInfo } from '../components/details/DeliveryInfo';
import { FloristCard } from '../components/details/FloristCard';
import { VerifiedReviews } from '../components/details/VerifiedReviews';

const getBouquet = (listingId?: string): BouquetDetails => {
  const listing = listingsDemoData.find(item => item.id === listingId);
  if (!listing) {
    return bouquetDetailsDemo;
  }
  return {
    ...bouquetDetailsDemo,
    id: listing.id,
    title: listing.title,
    unitPrice: parseFloat(listing.price.replace('$', '')),
    images: [listing.image],
  };
};

export function Details() {
  const navigation = useAppNavigation();
  const { params } = useAppNavRoute<typeof pages.Details>();
  const { addItem } = useCart();
  const bouquet = getBouquet(params?.listingId);

  const handleAddToCart = () => {
    addItem({
      id: bouquet.id,
      title: bouquet.title,
      category: bouquet.category,
      unitPrice: bouquet.unitPrice,
      image: bouquet.images[0],
    });
    navigation.navigate(pages.Cart);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <ImageCarousel images={bouquet.images} />
        <BouquetSummary bouquet={bouquet} />
        <DeliveryInfo bouquet={bouquet} />

        <View style={styles.about}>
          <Text style={styles.sectionTitle}>{detailsLabels.aboutThisBouquet}</Text>
          <Text style={styles.description}>{bouquet.description}</Text>
        </View>

        <FloristCard florist={bouquet.florist} />
        <VerifiedReviews reviews={bouquet.reviews} />
      </ScrollView>

      <View style={styles.bottomBar}>
        <ActionButton
          label={detailsLabels.addToCart}
          variant="outlined"
          onPress={handleAddToCart}
          style={styles.actionButton}
          icon={<ShoppingBag size={18} color={PRIMARY_ICON_COLOR} />}
        />
        <ActionButton label={detailsLabels.buyNow} style={styles.actionButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingBottom: 24,
  },
  about: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: 'Archivo',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#171A1F',
  },
  description: {
    marginTop: 8,
    fontFamily: 'Inter',
    fontSize: 13,
    lineHeight: 21,
    color: '#565E6C',
  },
  bottomBar: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  actionButton: {
    flex: 1,
  },
});
