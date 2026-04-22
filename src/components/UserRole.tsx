import React from 'react';
import { Archive, Flower2 } from 'lucide-react-native';
import { StyleSheet, View, Text } from 'react-native';
type tUserRole = 'Buyer' | 'Seller';

type UserRoleProps = {
  userRole: tUserRole;
  roleDescription: string;
  highlights: string[];
  selected?: boolean;
};

export function UserRole({
  userRole,
  roleDescription,
  highlights,
  selected = false,
}: UserRoleProps) {
  const label = `  I'm a ${userRole}`;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          {userRole === 'Buyer' ? <Archive size={24} /> : <Flower2 size={24} />}
        </View>
        <Text> {'\n'} </Text>
        <View
          style={[styles.checkIcon, selected && styles.checkIconSelected]}
        />
        <Text style={styles.title}>{label}</Text>
        <Text style={styles.description}>{roleDescription}</Text>
        <View style={styles.highlights}>
          {highlights.map((highlight, index) => (
            <View key={index} style={styles.highlightItem}>
              <Text style={styles.highlightText}>{highlight}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 22,
    left: 22,
    width: 48,
    height: 48,
    backgroundColor: '#F3F4F6FF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    width: 358,
    height: 252,
    backgroundColor: '#FFFFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#DEE1E6FF',
    shadowColor: '#171A1F',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    position: 'absolute',
    top: 86,
    left: 22,
    fontFamily: 'Archivo',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  description: {
    position: 'absolute',
    top: 119,
    left: 22,
    width: 320,
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 23,
    fontWeight: '400',
    color: '#565D6DFF',
  },
  highlights: {
    position: 'absolute',
    top: 208,
    left: 22,
    width: 81,
    height: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 1,
  },
  highlightItem: {
    height: 21,
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    backgroundColor: '#F3F4F6FF',
    borderWidth: 1,
    borderColor: '#00000000',
  },
  highlightText: {
    paddingHorizontal: 2,
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '500',
  },
  checkIcon: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: '#1f222a',
    backgroundColor: 'transparent',
    borderRadius: 20,
    position: 'absolute',
    top: 32,
    right: 22,
  },
  checkIconSelected: {
    backgroundColor: 'rgb(229, 230, 232)',
  },
});
