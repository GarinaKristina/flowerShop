import { StyleSheet, Text, View } from 'react-native';

export function FeaturedForYou() {
  return (
    <View style={{ marginTop: 12}}>
      <View>
        <Text style={styles.title}>Featured For You</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    left: 10,
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
});
