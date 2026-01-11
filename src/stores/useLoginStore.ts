import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';

import { LoginInfo, UserStore } from '@/types';

export const initailState: LoginInfo = {
  isLogin: false,
  accessToken: '',
  redirectUrl: '/',
  loginType: '',
  user: {
    email: '',
    username: '',
    userId: '',
    customerKey: '',
    phone: '',
  },
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
      setRedirectUrl: (redirectUrl: string) =>
        set((state) => ({
          loginInfo: { ...state.loginInfo, redirectUrl },
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
      user: state.loginInfo.user,
      redirectUrl: state.loginInfo.redirectUrl,
      _hasHydrated: state._hasHydrated,
      setIsLogin: state.setIsLogin,
      setAccessToken: state.setAccessToken,
      setRedirectUrl: state.setRedirectUrl,
      setLoginInfo: state.setLoginInfo,
      clearLoginInfo: state.clearLoginInfo,
    }))
  );

export default useLoginStore;
