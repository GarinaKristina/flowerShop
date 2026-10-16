import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../constants/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = useNavigation<NavigationProp>;
