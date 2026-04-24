import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { NearYouSkeleton } from './Skeletons';

export function NearYou() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Near You</Text>
        <Pressable>
          <Text style={styles.viewAllButton}>View All</Text>
        </Pressable>
      </View>
      <FlatList
        scrollEnabled={false}
        data={Array.from({ length: 10 })}
        renderItem={() => <NearYouSkeleton />}
        keyExtractor={(_, index) => `nearYou-${index}`}
      />
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
