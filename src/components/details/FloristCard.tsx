import { ACCENT_COLOR, PRIMARY_ICON_COLOR } from '../../constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BadgeCheck, MessageCircle, Star } from 'lucide-react-native';
import { BouquetDetails, detailsLabels } from '../../constants/mainInfo';
import { ActionButton } from '../common/ActionButton';

type FloristCardProps = {
  florist: BouquetDetails['florist'];
};

export function FloristCard({ florist }: FloristCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{detailsLabels.theFlorist}</Text>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{florist.name}</Text>
            <View style={styles.onlineDot} />
          </View>
          <View style={styles.info}>
            <View style={styles.nameRow}>
              <Text style={styles.name} numberOfLines={2}>
                {florist.name}
              </Text>
              <BadgeCheck size={14} color={PRIMARY_ICON_COLOR} />
            </View>
            <View style={styles.ratingRow}>
              <Star size={12} color="#F5A524" fill="#F5A524" />
              <Text style={styles.ratingText}>{florist.rating}</Text>
              <Text style={styles.reviewsCount}>{florist.reviewsCount}</Text>
            </View>
          </View>
          <ActionButton
            label={detailsLabels.contact}
            variant="outlined"
            style={styles.contactButton}
            icon={<MessageCircle size={14} color="#171A1F" />}
          />
        </View>
        <View style={styles.tagsRow}>
          {florist.tags.map(tag => (
            <View key={tag.label} style={[styles.tag, tag.tone === 'primary' ? styles.primaryTag : styles.accentTag]}>
              <Text style={[styles.tagText, tag.tone === 'primary' ? styles.primaryTagText : styles.accentTagText]}>{tag.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  card: {
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8EAFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: 'Archivo',
    fontSize: 18,
    fontWeight: '700',
    color: PRIMARY_ICON_COLOR,
  },
  onlineDot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  name: {
    flexShrink: 1,
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: '#171A1F',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
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
  contactButton: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  tag: {
    height: 22,
    paddingHorizontal: 10,
    borderRadius: 11,
    justifyContent: 'center',
  },
  primaryTag: {
    backgroundColor: '#E8EAFB',
  },
  accentTag: {
    backgroundColor: '#FBE5EC',
  },
  tagText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '600',
  },
  primaryTagText: {
    color: PRIMARY_ICON_COLOR,
  },
  accentTagText: {
    color: ACCENT_COLOR,
  },
});
