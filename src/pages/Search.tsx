import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from '../components/BottomNavigation';
import { pages, RootStackScreenProps } from '../constants/navigation';

export type SearchScreenProps = {
  query: string;
};

export function Search({ route }: RootStackScreenProps<typeof pages.Search>) {
  const { query } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{query}</Text>
      </View>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
