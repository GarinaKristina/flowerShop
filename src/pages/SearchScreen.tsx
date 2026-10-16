import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';
import InputComponent from '../components/common/Input';
import { placeholders } from '../constants/mainInfo';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { layoutStyles } from '../components/common/Typography';

export function Search() {
  return (
    <View style={layoutStyles.screen}>
      <View style={styles.row}>
        <InputComponent placeholderValue={placeholders.searchScreen} icon={<SearchIcon size={16} />} />
      </View>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
});
