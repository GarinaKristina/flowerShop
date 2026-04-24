import React from 'react';
import { ScrollView, View, Pressable, Text, StyleSheet } from 'react-native';

export function ScrollableFilters() {
  const highlights: string[] = ['Roses', 'Tulips', 'Mixed', 'Wedding'];
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  return (
    <ScrollView horizontal>
      <View style={styles.highlights}>
        {highlights.map((highlight, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedIndex(index)}
            style={[
              styles.highlightItem,
              selectedIndex === index && styles.highlightItemSelected,
            ]}
          >
            <Text style={styles.highlightText}>{highlight}</Text>
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
  highlightText: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
    color: '#171A1F',
  },
});
