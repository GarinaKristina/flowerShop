import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FeaturedSkeleton } from './Skeletons';
import { mainLabels } from '../../constants/mainInfo';

export function FeaturedForYou() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{mainLabels.featuredForYou}</Text>
        <Pressable>
          <Text style={styles.viewAllButton}>{mainLabels.viewAll}</Text>
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  viewAllButton: {
    width: 55,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    color: '#636AE8FF',
    backgroundColor: '#00000000',
    opacity: 1,
    borderWidth: 0,
    borderRadius: 6,
  },
});
