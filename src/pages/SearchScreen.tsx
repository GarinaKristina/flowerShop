import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';
import InputComponent from '../components/common/Input';
import { placeholders } from '../constants/mainInfo';
import { BottomNavigation } from '../components/common/BottomNavigation';

export function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <InputComponent placeholderValue={placeholders.searchScreen} icon={<SearchIcon size={16} />} />
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
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
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
