import { useCallback, useState } from 'react';
import { filterBouquetsLabels, freshnessLevelLabels, primaryColorLabels } from '../constants/mainInfo';

export const MIN_PRICE = 15;
export const MAX_PRICE = 150;

export type BouquetFilters = {
  maxPrice: number;
  flowerType: string;
  color: string;
  freshness: string;
  instant: boolean;
  delivery: boolean;
  pickup: boolean;
};

// Must match the options each filter component has selected initially.
export const defaultFilters: BouquetFilters = {
  maxPrice: MIN_PRICE,
  flowerType: filterBouquetsLabels.flowerTypes[0],
  color: primaryColorLabels.colors[1].name,
  freshness: freshnessLevelLabels.levels[1],
  instant: false,
  delivery: true,
  pickup: false,
};

export const useBouquetFilters = () => {
  const [filters, setFilters] = useState<BouquetFilters>(defaultFilters);

  const selectFilterOption = useCallback(<K extends keyof BouquetFilters>(key: K, value: BouquetFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  return { filters, selectFilterOption };
};
