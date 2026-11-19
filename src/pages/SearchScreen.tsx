import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';
import InputComponent from '../components/common/Input';
import { placeholders } from '../constants/mainInfo';
import { BottomNavigation } from '../components/common/BottomNavigation';
import { layoutStyles } from '../components/common/Typography';
import { RecommendedForYou } from '../components/search/RecommendedForYou';

export function Search() {
  return (
    <View style={layoutStyles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.row}>
          <InputComponent placeholderValue={placeholders.searchScreen} icon={<SearchIcon size={16} />} />
        </View>
        <RecommendedForYou />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 96,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
});
