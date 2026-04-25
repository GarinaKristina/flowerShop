import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

export function FeaturedSkeleton() {
  const cardsCount = 10;

  const layout = Array.from({ length: cardsCount }, (_, i) => ({
    key: `card${i}`,
    width: 280,
    height: 180,
    borderRadius: 0,
    marginTop: 12,
    marginLeft: i === 0 ? 0 : 12,
  }));

  return (
    <Skeleton
      isLoading={true}
      containerStyle={styles.containerStyle}
      layout={layout}
    >
      <Text>Your content</Text>
      <Text>Other content</Text>
    </Skeleton>
  );
}

export function NearYouSkeleton() {
  const cardsCount = 2;

  const layout = Array.from({ length: cardsCount }, (_, i) => ({
    key: `card${i}`,
    width: 171,
    height: 362,
    borderRadius: 0,
    marginTop: 20,
    marginLeft: i === 0 ? 0 : 25,
  }));

  return (
    <Skeleton
      isLoading={true}
      containerStyle={styles.containerStyle}
      layout={layout}
    >
      <Text>Your content</Text>
      <Text>Other content</Text>
    </Skeleton>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
});
