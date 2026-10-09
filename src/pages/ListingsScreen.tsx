import React from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Edit2, Eye, Heart, MoreVertical, Search } from 'lucide-react-native';
import { ListingItem, listingsLabels } from '../constants/mainInfo';
import { FilterTab, useListings } from '../hooks/useListings';

const TABS: FilterTab[] = ['all', 'active', 'inactive'];

export const listingsDemoData: ListingItem[] = [
  {
    id: '1',
    title: 'Midnight Rose Bouquet',
    price: '$45.00',
    status: 'active',
    views: '1.2k',
    favorites: 124,
    isEnabled: true,
    image: require('../../assets/roses.jpeg'),
  },
  {
    id: '2',
    title: 'Spring Tulip Medley',
    price: '$32.50',
    status: 'active',
    views: '890',
    favorites: 86,
    isEnabled: true,
    image: require('../../assets/smth.jpeg'),
  },
  {
    id: '3',
    title: 'Pure White Lilies',
    price: '$38.00',
    status: 'paused',
    views: '420',
    favorites: 45,
    isEnabled: false,
    image: require('../../assets/smth2.jpeg'),
  },
  {
    id: '4',
    title: 'Sunflower Sunshine',
    price: '$28.00',
    status: 'active',
    views: '2.3k',
    favorites: 210,
    isEnabled: true,
    image: require('../../assets/piones.jpeg'),
  },
];

export function Listings() {
  const { search, setSearch, filter, setFilter, enabledMap, toggleListing, filtered } = useListings();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.searchBar}>
        <Search size={18} color="#9095A0" />
        <TextInput
          style={styles.searchInput}
          placeholder={listingsLabels.searchPlaceholder}
          placeholderTextColor="#9095A0"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.tabsBar}>
        {TABS.map(tab => (
          <TouchableOpacity key={tab} style={[styles.tab, filter === tab && styles.activeTab]} onPress={() => setFilter(tab)}>
            <Text style={[styles.tabLabel, filter === tab && styles.activeTabLabel]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.countRow}>
        <Text style={styles.countText}>Showing {filtered.length} listings</Text>
        <Text style={styles.sortText}>{listingsLabels.sortByNewest}</Text>
      </View>

      {filtered.map(listing => (
        <View key={listing.id} style={styles.card}>
          <View style={styles.listingImage}>
            <Image source={listing.image} style={styles.listingImageImg} />
            <View style={[styles.badge, listing.status === 'active' ? styles.activeBadge : styles.pausedBadge]}>
              <Text style={[styles.badgeText, listing.status === 'paused' && styles.pausedBadgeText]}>
                {listing.status === 'active' ? listingsLabels.statusActive : listingsLabels.statusPaused}
              </Text>
            </View>
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardTop}>
              <Text style={styles.listingTitle} numberOfLines={2}>
                {listing.title}
              </Text>
              <TouchableOpacity hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <MoreVertical size={20} color="#9095A0" />
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>{listing.price}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statsLeft}>
                <Eye size={15} color="#9095A0" />
                <Text style={styles.statValue}>{listing.views}</Text>
                <Heart size={15} color="#9095A0" />
                <Text style={styles.statValue}>{listing.favorites}</Text>
              </View>
              <View style={styles.statsActions}>
                <TouchableOpacity style={styles.editButton} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Edit2 size={15} color="#9095A0" />
                </TouchableOpacity>
                <Switch
                  value={enabledMap[listing.id] ?? listing.isEnabled}
                  onValueChange={() => toggleListing(listing.id)}
                  trackColor={{ false: '#BCC1CA', true: '#636AE8' }}
                  thumbColor="#FFFFFF"
                  ios_backgroundColor="#BCC1CA"
                />
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    paddingBottom: 32,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#171A1F',
  },
  tabsBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 30,
    padding: 4,
  },
  tab: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  tabLabel: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#9095A0',
  },
  activeTabLabel: {
    fontWeight: '600',
    color: '#171A1F',
  },
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 4,
  },
  countText: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#9095A0',
  },
  sortText: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '600',
    color: '#636AE8',
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
  },
  listingImage: {
    width: 130,
    height: 130,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  listingImageImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
  },
  badge: {
    margin: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  activeBadge: {
    backgroundColor: '#636AE8',
  },
  pausedBadge: {
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pausedBadgeText: {
    color: '#565E6C',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 4,
  },
  listingTitle: {
    flex: 1,
    fontFamily: 'Archivo',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
    color: '#171A1F',
  },
  price: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    color: '#636AE8',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statsLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statValue: {
    fontFamily: 'Inter',
    fontSize: 13,
    color: '#9095A0',
  },
  statsActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
