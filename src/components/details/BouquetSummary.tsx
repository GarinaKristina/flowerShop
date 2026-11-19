import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CircleCheck, Clock3, Star } from 'lucide-react-native';
import { BouquetDetails, detailsLabels } from '../../constants/mainInfo';

type BouquetSummaryProps = {
  bouquet: BouquetDetails;
};

export function BouquetSummary({ bouquet }: BouquetSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{bouquet.title}</Text>
        <View style={styles.priceBlock}>
          <Text style={styles.price}>{bouquet.unitPrice}</Text>
          <Text style={styles.vat}>{detailsLabels.vatIncluded}</Text>
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.ratingBadge}>
          <Star size={12} color="#F5A524" fill="#F5A524" />
          <Text style={styles.ratingText}>{bouquet.rating}</Text>
        </View>
        <Text style={styles.reviewsCount}>{bouquet.reviewsCount}</Text>
      </View>

      <View style={styles.pillsRow}>
        <View style={[styles.pill, styles.stockPill]}>
          <CircleCheck size={13} color="#1E8E4E" />
          <Text style={[styles.pillText, styles.stockText]}>{detailsLabels.inStock}</Text>
        </View>
        <View style={[styles.pill, styles.freshnessPill]}>
          <Clock3 size={13} color={PRIMARY_ICON_COLOR} />
          <Text style={[styles.pillText, styles.freshnessText]}>{bouquet.freshness}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    flex: 1,
    fontFamily: 'Archivo',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1F',
  },
  priceBlock: {
    alignItems: 'flex-end',
  },
  price: {
    fontFamily: 'Archivo',
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '800',
    color: PRIMARY_ICON_COLOR,
  },
  vat: {
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#565E6C',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    height: 24,
    borderRadius: 8,
    backgroundColor: '#FFF4DB',
    borderWidth: 1,
    borderColor: '#F5D88C',
  },
  ratingText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
    color: '#171A1F',
  },
  reviewsCount: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#565E6C',
  },
  pillsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 28,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  stockPill: {
    backgroundColor: '#E6F6EC',
  },
  freshnessPill: {
    backgroundColor: '#E8EAFB',
  },
  pillText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
  },
  stockText: {
    color: '#1E8E4E',
  },
  freshnessText: {
    color: PRIMARY_ICON_COLOR,
  },
});
