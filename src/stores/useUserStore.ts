import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

import { RoleEnum, User, UserStore } from '@/types';

export const initialUserStoreState: User = {
  customerKey: '',
  email: '',
  username: '',
  phone: '',
  profileImage: null,
  zonecode: null,
  roadAddress: null,
  detailAddress: null,
  role: RoleEnum.GENERAL,
};

const userStore = create<UserStore>((set) => ({
  user: initialUserStoreState,
  setUser: (inputUser: Partial<User>) => set(({ user }) => ({ user: { ...user, ...inputUser } })),
  clearUser: () => set({ user: initialUserStoreState }),
}));

export const userActions = {
  setUser: (inputUser: Partial<User>) => userStore.getState().setUser(inputUser),
  clearUser: () => userStore.getState().clearUser(),
  user: () => userStore.getState().user,
};

const useUserStore = () =>
  userStore(
    useShallow((state) => ({
      user: state.user,
      setUser: state.setUser,
      clearUser: state.clearUser,
    }))
  );

export default useUserStore;
