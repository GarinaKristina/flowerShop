import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

export type MenuItem = {
  key: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  onPress?: () => void;
};

type ProfileMenuProps = {
  title: string;
  items: MenuItem[];
};

export function ProfileMenuItems({ title, items }: ProfileMenuProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Pressable
              key={item.key}
              onPress={item.onPress}
              style={({ pressed }) => [styles.row, !isLast && styles.rowDivider, pressed && styles.pressed]}
            >
              <View style={styles.iconBadge}>
                <item.Icon size={20} color="#636AE8" />
              </View>
              <Text style={styles.label}>{item.label}</Text>
              <ChevronRight size={20} color="#BCC1CA" />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

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
    backgroundColor: '#FFFFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F5',
  },
  pressed: {
    backgroundColor: '#F2F2FDFF',
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2FDFF',
    marginRight: 12,
  },
  label: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#171A1FFF',
  },
});
