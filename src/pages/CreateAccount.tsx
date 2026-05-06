import { ScrollView, StyleSheet, View } from 'react-native';
import InputComponent from '../components/Input';
import FilterButton from '../components/FilterButton';
import React from 'react';

export function CreateAccount() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.row}>
        <InputComponent />
        <FilterButton style={styles.filterButton} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  filterButton: {
    marginLeft: 5,
  },
  screen: {
    paddingBottom: 20,
  },
});
