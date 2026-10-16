import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { PRIMARY_ICON_COLOR, TEXT_PRIMARY, TEXT_SECONDARY } from '../../constants/colors';

const variants = StyleSheet.create({
  h4: { fontFamily: 'Archivo', fontSize: 24, lineHeight: 32, fontWeight: '700', color: TEXT_PRIMARY },
  h5: { fontFamily: 'Archivo', fontSize: 20, lineHeight: 28, fontWeight: '700', color: TEXT_PRIMARY },
  h6: { fontFamily: 'Archivo', fontSize: 16, lineHeight: 22, fontWeight: '700', color: TEXT_PRIMARY },
  statValue: { fontFamily: 'Inter', fontSize: 18, lineHeight: 28, fontWeight: '700', color: TEXT_PRIMARY },
  screenTitle: { fontSize: 24, fontWeight: 'bold' },
  subtitle1: { fontFamily: 'Inter', fontSize: 16, lineHeight: 24, fontWeight: '600', color: TEXT_PRIMARY },
  subtitle2: { fontFamily: 'Archivo', fontSize: 14, lineHeight: 20, fontWeight: '700', color: TEXT_PRIMARY },
  sectionTitle: { fontFamily: 'Archivo', fontSize: 14, lineHeight: 20, fontWeight: '600', color: TEXT_PRIMARY },
  body1Bold: { fontFamily: 'Inter', fontSize: 16, fontWeight: '700', color: TEXT_PRIMARY },
  body2: { fontFamily: 'Inter', fontSize: 14, lineHeight: 20, fontWeight: '400', color: TEXT_SECONDARY },
  body2Medium: { fontFamily: 'Inter', fontSize: 14, lineHeight: 20, fontWeight: '500', color: TEXT_PRIMARY },
  body2Bold: { fontFamily: 'Inter', fontSize: 14, fontWeight: '700', color: TEXT_PRIMARY },
  fieldLabel: { fontSize: 14, lineHeight: 20, fontWeight: '700', color: TEXT_SECONDARY },
  filterTitle: { fontFamily: 'Archivo', fontSize: 16, fontWeight: '700', color: TEXT_SECONDARY },
  filterTitleSmall: { fontFamily: 'Archivo', fontSize: 14, fontWeight: '700', color: TEXT_SECONDARY },
  caption: { fontFamily: 'Inter', fontSize: 12, lineHeight: 16, fontWeight: '400', color: TEXT_SECONDARY },
  captionMedium: { fontFamily: 'Inter', fontSize: 12, lineHeight: 16, fontWeight: '500', color: TEXT_SECONDARY },
  captionMuted: { fontFamily: 'Inter', fontSize: 12, color: '#ABABAB' },
  labelSmall: { fontFamily: 'Inter', fontSize: 12, lineHeight: 20, fontWeight: '600', color: TEXT_PRIMARY },
  overline: { fontFamily: 'Inter', fontSize: 10, lineHeight: 15, fontWeight: '500', color: TEXT_SECONDARY },
  caption2: { fontFamily: 'Inter', fontSize: 10, lineHeight: 15, fontWeight: '400', color: TEXT_SECONDARY },
  meta: { fontFamily: 'Inter', fontSize: 13, color: '#9095A0' },
  link: { fontFamily: 'Inter', fontSize: 14, lineHeight: 22, fontWeight: '600', color: PRIMARY_ICON_COLOR },
  buttonSmall: { fontFamily: 'Inter', fontSize: 14, lineHeight: 22, fontWeight: '500', color: TEXT_PRIMARY },
  buttonMedium: { fontFamily: 'Inter', fontSize: 16, lineHeight: 22, fontWeight: '600', color: TEXT_PRIMARY },
  button: { fontFamily: 'Inter', fontSize: 16, lineHeight: 26, fontWeight: '700', color: 'rgb(15, 22, 39)' },
});

export const layoutStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  filterSection: { paddingHorizontal: 16, paddingVertical: 16 },
  filterTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
});

export type TypographyVariant = keyof typeof variants;

type TypographyProps = TextProps & {
  variant: TypographyVariant;
  color?: string;
};

export function Typography({ variant, color, style, ...rest }: TypographyProps) {
  return <Text style={[variants[variant], color ? { color } : undefined, style]} {...rest} />;
}
