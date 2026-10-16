import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { FeaturedSkeleton } from './Skeletons';
import { mainLabels } from '../../constants/mainInfo';
import { layoutStyles, Typography } from '../common/Typography';

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FeaturedSkeleton />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
