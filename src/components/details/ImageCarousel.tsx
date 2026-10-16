import React, { useState } from 'react';
import { Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Maximize2 } from 'lucide-react-native';

type ImageCarouselProps = {
  images: ReturnType<typeof require>[];
};

const IMAGE_HEIGHT = 360;

export function ImageCarousel({ images }: ImageCarouselProps) {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width));
  };

  return (
    <View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={onScrollEnd}>
        {images.map((source, index) => (
          <Image key={index} source={source} style={{ width, height: IMAGE_HEIGHT }} resizeMode="cover" />
        ))}
      </ScrollView>
      <View style={styles.expandButton}>
        <Maximize2 size={16} color="#FFFFFF" />
      </View>
      <View style={styles.dots}>
        {images.map((_, index) => (
          <View key={index} style={[styles.dot, index === activeIndex && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  expandButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  activeDot: {
    width: 18,
    backgroundColor: '#FFFFFF',
  },
});
