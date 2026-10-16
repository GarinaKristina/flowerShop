import { Alert, FlatList, Pressable, StyleSheet, View } from 'react-native';
import { TEXT_PRIMARY } from '../../constants/colors';
import { NearYouSkeleton } from './Skeletons';
import { Funnel } from 'lucide-react-native';
import { buyerHomeLabels } from '../../constants/mainInfo';
import { layoutStyles, Typography } from '../common/Typography';

export function NearYou() {
  return (
    <View style={styles.container}>
      <View style={layoutStyles.sectionHeader}>
        <Typography variant="h5">{buyerHomeLabels.nearYou}</Typography>
        <Pressable style={styles.relevanceButton} onPress={() => Alert.alert('pressed')}>
          <Funnel size={14} style={styles.filterIcon} />
          <Typography variant="captionMedium" color={TEXT_PRIMARY}>
            {buyerHomeLabels.relevance}
          </Typography>
        </Pressable>
      </View>
      <FlatList
        scrollEnabled={false}
        data={Array.from({ length: 10 })}
        renderItem={() => <NearYouSkeleton />}
        keyExtractor={(_, index) => `nearYou-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  relevanceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
    paddingHorizontal: 12,

    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DEE1E6',
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 3,
  },
  filterIcon: {
    marginRight: 8,
  },
});
