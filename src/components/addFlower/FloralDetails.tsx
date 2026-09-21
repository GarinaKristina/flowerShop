import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Clock, Layers, Palette } from 'lucide-react-native';
import { Tag, TagTone } from '../common/Tag';
import { ViewStyleProp } from '../../utils/styles';
import { demoData, floralDetailsLabels } from '../../constants/mainInfo';

type FloralDetailRow = {
  key: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  subtitle: string;
  value: string;
  valueTone: TagTone;
  badgeStyle: ViewStyleProp;
  iconColor: string;
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#171A1FFF',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 12,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
  },
  pressed: {
    backgroundColor: '#F0F1F3',
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    flex: 1,
  },
  label: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: '#171A1FFF',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#565D6DFF',
  },
  flowerBadge: {
    backgroundColor: '#F2F2FD',
  },
  colorBadge: {
    backgroundColor: '#FDF2F5',
  },
  freshnessBadge: {
    backgroundColor: '#EEFCFA',
  },
});

const FLORAL_ROWS: FloralDetailRow[] = [
  {
    key: 'flowerType',
    Icon: Layers,
    label: floralDetailsLabels.flowerType,
    subtitle: floralDetailsLabels.flowerTypeDescription,
    value: demoData.floralDetails.flowerType,
    valueTone: 'neutral',
    badgeStyle: styles.flowerBadge,
    iconColor: '#636AE8',
  },
  {
    key: 'colorPalette',
    Icon: Palette,
    label: floralDetailsLabels.colorPalette,
    subtitle: floralDetailsLabels.colorPaletteDescription,
    value: demoData.floralDetails.colorPalette,
    valueTone: 'neutral',
    badgeStyle: styles.colorBadge,
    iconColor: '#E57373',
  },
  {
    key: 'freshness',
    Icon: Clock,
    label: floralDetailsLabels.freshness,
    subtitle: floralDetailsLabels.freshnessDescription,
    value: demoData.floralDetails.freshness,
    valueTone: 'accent',
    badgeStyle: styles.freshnessBadge,
    iconColor: '#22CCB2',
  },
];

export function FloralDetails() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{floralDetailsLabels.title}</Text>
      <View style={styles.card}>
        {FLORAL_ROWS.map((row, index) => {
          const isLast = index === FLORAL_ROWS.length - 1;

          return (
            <Pressable key={row.key} style={({ pressed }) => [styles.row, !isLast && styles.rowDivider, pressed && styles.pressed]}>
              <View style={[styles.iconBadge, row.badgeStyle]}>
                <row.Icon size={20} color={row.iconColor} />
              </View>
              <View style={styles.texts}>
                <Text style={styles.label}>{row.label}</Text>
                <Text style={styles.subtitle}>{row.subtitle}</Text>
              </View>
              <Tag label={row.value} tone={row.valueTone} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
