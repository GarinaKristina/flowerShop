import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BuyerHomeSkeleton } from '../Skeleton';


export function FeaturedForYou() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Featured For You</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BuyerHomeSkeleton />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    left: 10,
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
});
