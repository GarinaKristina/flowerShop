import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Heart } from 'lucide-react-native';
import { Image, ImageStyle, Pressable, StyleProp, StyleSheet, Text, View } from 'react-native';
import { ListingItem } from '../../constants/mainInfo';
import { pages } from '../../constants/navigation';
import { useFavorites } from '../../context/FavoritesContext';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { ViewStyleProp } from '../../utils/styles';

const HEART_ACTIVE_COLOR = '#E5484D';

type ListingCardProps = {
  listing: ListingItem;
  style?: ViewStyleProp;
  imageStyle?: StyleProp<ImageStyle>;
};

export function ListingCard({ listing, style, imageStyle }: ListingCardProps) {
  const navigation = useAppNavigation();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(listing.id);

  return (
    <Pressable style={style} onPress={() => navigation.navigate(pages.Details, { listingId: listing.id })}>
      <View>
        <Image source={listing.image} style={[styles.image, imageStyle]} resizeMode="cover" />
        <Pressable style={styles.favoriteButton} hitSlop={8} onPress={() => toggleFavorite(listing)}>
          <Heart size={18} color={favorite ? HEART_ACTIVE_COLOR : '#3f4146'} fill={favorite ? HEART_ACTIVE_COLOR : 'none'} />
        </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {listing.title}
      </Text>
      <Text style={styles.price}>{listing.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  title: {
    marginTop: 8,
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#171A1F',
  },
  price: {
    marginTop: 2,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: PRIMARY_ICON_COLOR,
  },
});
