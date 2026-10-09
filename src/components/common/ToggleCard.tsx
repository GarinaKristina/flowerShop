import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useOpen } from '../../hooks/useOpenClose';
import { ViewStyleProp } from '../../utils/styles';

type ToggleCardProps = {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
  subtitle: string;
  initialValue?: boolean;
  onValueChange?: (isOn: boolean) => void;
  style?: ViewStyleProp;
  badgeStyle?: ViewStyleProp;
  iconColor?: string;
};

export function ToggleCard({
  Icon,
  title,
  subtitle,
  initialValue = false,
  onValueChange,
  style,
  badgeStyle,
  iconColor = '#FFFFFFFF',
}: ToggleCardProps) {
  const toggle = useOpen(initialValue);

  const handleChange = (next: boolean) => {
    if (next) {
      toggle.open();
    } else {
      toggle.close();
    }
    onValueChange?.(next);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.iconBadge, badgeStyle]}>
        <Icon size={20} color={iconColor} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Switch
        style={styles.switch}
        value={toggle.isOpen}
        onValueChange={handleChange}
        trackColor={{ false: '#BCC1CAFF', true: '#636AE8FF' }}
        thumbColor="#FFFFFFFF"
        ios_backgroundColor="#BCC1CAFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#636AE8FF',
    marginRight: 12,
  },
  texts: {
    flex: 1,
  },
  switch: {
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Archivo',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#171A1FFF',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#565D6DFF',
  },
});
