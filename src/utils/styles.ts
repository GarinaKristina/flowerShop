import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { PRIMARY_ICON_COLOR } from '../constants/colors';

export type ViewStyleProp = StyleProp<ViewStyle>;
export type TextStyleProp = StyleProp<TextStyle>;

export const toggleCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 68,
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 12,
    backgroundColor: '#F2F2FDFF',
    borderRadius: 10,
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 2,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_ICON_COLOR,
    marginRight: 12,
  },
  texts: {
    flex: 1,
  },
  switch: {
    alignSelf: 'center',
  },
});
