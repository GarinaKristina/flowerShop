import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../constants/navigation';

export const useAppNavRoute = <T extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, T>>();
};
