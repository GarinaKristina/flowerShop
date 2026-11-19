import { useCallback, useRef, useState } from 'react';

export const useOpen = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  const value = useRef({
    open,
    close,
    toggle,
    isOpen,
  });

  value.current.isOpen = isOpen;
  return value.current;
};
