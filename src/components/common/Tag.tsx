import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { TextStyleProp, ViewStyleProp } from '../../utils/styles';

export type TagTone = 'primary' | 'neutral' | 'accent';

type TagProps = {
  label: string;
  tone?: TagTone;
  onPress?: () => void;
};

export function Tag({ label, tone = 'primary', onPress }: TagProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.tagItem, toneItem[tone], pressed && tonePressed[tone]]}>
      <Text style={[styles.label, toneLabel[tone]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tagItem: {
    height: 26,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    borderWidth: 1,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '600',
  },
  primaryItem: {
    backgroundColor: '#bfc4f1d6',
    borderColor: '#636AE8',
  },
  primaryLabel: {
    color: '#636AE8',
  },
  primaryPressed: {
    backgroundColor: '#BCC1CA',
    borderColor: '#565E6C',
  },
  neutralItem: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE1E6',
  },
  neutralLabel: {
    color: '#171A1F',
  },
  accentItem: {
    backgroundColor: '#FFFFFF',
    borderColor: '#22CCB2',
  },
  accentLabel: {
    color: '#22CCB2',
  },
  pressed: {
    opacity: 0.7,
  },
});

const toneItem: Record<TagTone, ViewStyleProp> = {
  primary: styles.primaryItem,
  neutral: styles.neutralItem,
  accent: styles.accentItem,
};

const toneLabel: Record<TagTone, TextStyleProp> = {
  primary: styles.primaryLabel,
  neutral: styles.neutralLabel,
  accent: styles.accentLabel,
};

const tonePressed: Record<TagTone, ViewStyleProp> = {
  primary: styles.primaryPressed,
  neutral: styles.pressed,
  accent: styles.pressed,
};
