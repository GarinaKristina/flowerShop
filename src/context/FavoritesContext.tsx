import React, { createContext, useContext, useState } from 'react';
import { ListingItem } from '../constants/mainInfo';

type FavoritesContextValue = {
  favorites: ListingItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (listing: ListingItem) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<ListingItem[]>([]);

  function isFavorite(id: string) {
    return favorites.some(item => item.id === id);
  }

  function toggleFavorite(listing: ListingItem) {
    setFavorites(current =>
      current.some(item => item.id === listing.id) ? current.filter(item => item.id !== listing.id) : [...current, listing],
    );
  }

  return <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used inside FavoritesProvider');
  }
  return context;
}
