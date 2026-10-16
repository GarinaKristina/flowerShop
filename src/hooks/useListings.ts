import { useCallback, useState } from 'react';
import { listingsDemoData } from '../pages/ListingsScreen';

export type FilterTab = 'all' | 'active' | 'inactive';

export const useListings = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterTab>('all');
  const [enabledMap, setEnabledMap] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(listingsDemoData.map(l => [l.id, l.isEnabled])),
  );

  const toggleListing = useCallback((id: string) => {
    setEnabledMap(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const filtered = listingsDemoData.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === 'all' || (filter === 'active' && l.status === 'active') || (filter === 'inactive' && l.status === 'paused');
    return matchesSearch && matchesFilter;
  });

  return { search, setSearch, filter, setFilter, enabledMap, toggleListing, filtered };
};
