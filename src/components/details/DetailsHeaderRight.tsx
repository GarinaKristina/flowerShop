import { Heart, Share2 } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

export function DetailsHeaderRight() {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={8}>
        <Share2 size={22} color="#3f4146" />
      </Pressable>
      <Pressable hitSlop={8}>
        <Heart size={22} color="#3f4146" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});
