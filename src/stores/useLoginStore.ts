import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

import { LoginStore, LoginStoreState } from '@/types';
import { SocialProviderEnum } from '@/types/enum';

export const initailLoginStoreState: LoginStoreState = {
  isLoggedIn: false,
  provider: SocialProviderEnum.NONE,
  redirectUrl: '/',
};

export const loginStore = create<LoginStore>((set) => ({
  ...initailLoginStoreState,
  clearLogout: () => set({ ...initailLoginStoreState }),
  setLogin: (loginInfo: LoginStoreState) => set({ ...loginInfo }),
  setRedirectUrl: (redirectUrl: string) => set((state) => ({ ...state, redirectUrl })),
}));

const useLoginStore = () =>
  loginStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      provider: state.provider,
      redirectUrl: state.redirectUrl,
      clearLogout: state.clearLogout,
      setLogin: state.setLogin,
      setRedirectUrl: state.setRedirectUrl,
    }))
  );

export const loginActions = {
  clearLogout: () => loginStore.getState().clearLogout(),
  getLogin: () => loginStore.getState().isLoggedIn,
  getProvider: () => loginStore.getState().provider,
  getRedirectUrl: () => loginStore.getState().redirectUrl,
  setLogin: (loginInfo: LoginStoreState) => loginStore.getState().setLogin(loginInfo),
};

export default useLoginStore;
