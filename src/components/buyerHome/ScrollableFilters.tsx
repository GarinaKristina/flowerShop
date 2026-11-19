import React from 'react';
import { ScrollView, View, Pressable, StyleSheet } from 'react-native';
import { buyerHomeLabels } from '../../constants/mainInfo';
import { Typography } from '../common/Typography';
import { useSelection } from '../../hooks/useSelection';

export function ScrollableFilters() {
  const highlights: string[] = buyerHomeLabels.filters;
  const { selectedFilter, selectNewFilter } = useSelection();

  return (
    <ScrollView horizontal>
      <View style={styles.highlights}>
        {highlights.map((highlight, index) => (
          <Pressable
            key={index}
            onPress={() => selectNewFilter(index)}
            style={[styles.highlightItem, selectedFilter === index && styles.highlightItemSelected]}
          >
            <Typography variant="buttonSmall">{highlight}</Typography>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  highlights: {
    marginTop: 8,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightItemSelected: { backgroundColor: '#8080e63e' },
  highlightItem: {
    marginRight: 12,
    height: 42,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e7ec3e',
    opacity: 1,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#DEE1E6',
  },
});
