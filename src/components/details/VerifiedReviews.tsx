import { PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronRight, Star } from 'lucide-react-native';
import { BouquetReview, detailsLabels, mainLabels } from '../../constants/mainInfo';

type VerifiedReviewsProps = {
  reviews: BouquetReview[];
};

const MAX_STARS = 5;

export function VerifiedReviews({ reviews }: VerifiedReviewsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>{detailsLabels.verifiedReviews}</Text>
        <Pressable style={styles.viewAll}>
          <Text style={styles.viewAllText}>{mainLabels.viewAll}</Text>
          <ChevronRight size={14} color={PRIMARY_ICON_COLOR} />
        </Pressable>
      </View>

      {reviews.map((review, index) => (
        <View key={review.id} style={[styles.review, index > 0 && styles.reviewBorder]}>
          <View style={styles.reviewTop}>
            <View style={styles.reviewer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{review.author}</Text>
              </View>
              <View>
                <Text style={styles.author}>{review.author}</Text>
                <View style={styles.stars}>
                  {Array.from({ length: MAX_STARS }, (_, i) => (
                    <Star
                      key={i}
                      size={11}
                      color={i < review.rating ? '#F5A524' : '#DEE1E6'}
                      fill={i < review.rating ? '#F5A524' : '#DEE1E6'}
                    />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.postedAgo}>{review.postedAgo}</Text>
          </View>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Archivo',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#171A1F',
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  viewAllText: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '600',
    color: PRIMARY_ICON_COLOR,
  },
  review: {
    paddingVertical: 14,
  },
  reviewBorder: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F5',
  },
  reviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  reviewer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8EAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: 'Archivo',
    fontSize: 13,
    fontWeight: '700',
    color: PRIMARY_ICON_COLOR,
  },
  author: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: '#171A1F',
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 2,
  },
  postedAgo: {
    fontFamily: 'Inter',
    fontSize: 11,
    color: '#565E6C',
  },
  text: {
    marginTop: 10,
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 18,
    color: '#565E6C',
  },
});
