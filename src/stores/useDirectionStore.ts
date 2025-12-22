import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

type Direction = 'forward' | 'backward';

type StoreType = {
  direction: Direction;
  setDirection: (direction: Direction) => void;
};

const initialState: Direction = 'forward';

export const directionStore = create<StoreType>((set) => ({
  direction: initialState,
  setDirection: (direction) => set({ direction }),
}));

const useDirectionStore = () =>
  directionStore(
    useShallow((state) => ({
      direction: state.direction,
      setDirection: state.setDirection,
    }))
  );

export default useDirectionStore;
