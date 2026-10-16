import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { mainLabels } from '../../constants/mainInfo';
import { ListingCard } from '../common/ListingCard';
import { layoutStyles, Typography } from '../common/Typography';
import { listingsDemoData } from '../../pages/ListingsScreen';

export function FeaturedForYou() {
  return (
    <View style={styles.container}>
      <View style={layoutStyles.sectionHeader}>
        <Typography variant="h5">{mainLabels.featuredForYou}</Typography>
        <Pressable>
          <Typography variant="link" style={styles.viewAllButton}>
            {mainLabels.viewAll}
          </Typography>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
        {listingsDemoData.map(listing => (
          <ListingCard key={listing.id} listing={listing} style={styles.card} imageStyle={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 12,
  },
  card: {
    width: 280,
  },
  image: {
    height: 180,
  },
  viewAllButton: {
    width: 55,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
    opacity: 1,
    borderWidth: 0,
    borderRadius: 6,
  },
});
