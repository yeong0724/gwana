import { createContext } from 'react';

type Direction = 'forward' | 'backward';

interface RouterWrapperContextType {
  direction: Direction;
  setDirection: (direction: Direction) => void;
  wrappedPush: (url: string) => void;
  wrappedBack: () => void;
  isBrowserNavigation: boolean;
}

export const RouterWrapperContext = createContext<RouterWrapperContextType>({
  direction: 'forward',
  setDirection: () => {},
  wrappedPush: () => {},
  wrappedBack: () => {},
  isBrowserNavigation: false,
});
