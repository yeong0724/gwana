import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';

import { LoginInfo, UserStore } from '@/types';

const initailState: LoginInfo = {
  isLogin: false,
  accessToken: '',
  from: '/',
};

type ExtendedUserStore = UserStore & {
  _hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const loginStore = create<ExtendedUserStore>()(
  persist(
    (set) => ({
      loginInfo: initailState,
      _hasHydrated: false,
      setIsLogin: (isLogin: boolean) =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, isLogin },
        })),
      setAccessToken: (accessToken: string) =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, accessToken },
        })),
      setFrom: (from: string) =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, from },
        })),
      setLoginInfo: (loginInfo: LoginInfo) => set({ loginInfo }),
      clearLoginInfo: () => set({ loginInfo: initailState }),
      setHasHydrated: (hasHydrated: boolean) => set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: 'login',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export const loginActions = {
  getLoginInfo: () => loginStore.getState().loginInfo,
  setLoginInfo: (loginInfo: LoginInfo) => loginStore.getState().setLoginInfo(loginInfo),
  clearLoginInfo: () => loginStore.getState().clearLoginInfo(),
};

const useLoginStore = () =>
  loginStore(
    useShallow((state) => ({
      loginInfo: state.loginInfo,
      isLogin: state.loginInfo.isLogin,
      accessToken: state.loginInfo.accessToken,
      from: state.loginInfo.from,
      _hasHydrated: state._hasHydrated,
      setIsLogin: state.setIsLogin,
      setAccessToken: state.setAccessToken,
      setFrom: state.setFrom,
      setLoginInfo: state.setLoginInfo,
      clearLoginInfo: state.clearLoginInfo,
    }))
  );

export default useLoginStore;
