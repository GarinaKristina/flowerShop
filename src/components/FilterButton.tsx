import {SlidersHorizontal} from 'lucide-react-native';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

type Props = {
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const FilterButton = ({onPress, disabled, style}: Props) => {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
        style,
      ]}>
      <SlidersHorizontal size={20} color={tokens.iconColor} />
    </Pressable>
  );
};

const tokens = {
  iconColor: '#171A1F',
} as const;

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    width: 44,
    height: 44,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFB',
    opacity: 1,
    borderRadius: 16,
    borderWidth: 0,
    borderColor: '#000000',
    borderStyle: 'solid',
    shadowColor: '#171A1F',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.09,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#FAFAFB',
  },
  buttonDisabled: {
    opacity: 0.4,
  },
});

export default FilterButton;
