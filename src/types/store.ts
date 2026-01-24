import { SocialProviderEnum, User } from '@/types';

export type UserStore = {
  user: User;
  setUser: (user: Partial<User>) => void;
  clearUser: () => void;
};

export type LoginStoreState = Omit<LoginStore, 'clearLogout' | 'setLogin' | 'setRedirectUrl'>;

export type LoginStore = {
  isLoggedIn: boolean;
  provider: SocialProviderEnum;
  redirectUrl: string;
  setLogin: (loginInfo: LoginStoreState) => void;
  clearLogout: () => void;
  setRedirectUrl: (redirectUrl: string) => void;
};
