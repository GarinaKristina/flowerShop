import { useState } from 'react';

export const useSelection = (initialIndex: number | null = null) => {
  const [selectedFilter, selectNewFilter] = useState<number | null>(initialIndex);

  return { selectedFilter, selectNewFilter };
};
