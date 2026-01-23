export type LoginInfo = {
  isLogin: boolean;
  accessToken: string;
  redirectUrl: string;
  loginType: 'kakao' | 'naver' | 'google' | '';
  user: {
    email: string;
    username: string;
    userId: string;
    customerKey: string;
    phone: string;
    profileImage: string | null;
  };
};

export type UserStore = {
  loginInfo: LoginInfo;
  setIsLogin: (isLogin: boolean) => void;
  setAccessToken: (accessToken: string) => void;
  setLoginInfo: (userInfo: LoginInfo) => void;
  clearLoginInfo: () => void;
  setRedirectUrl: (redirectUrl: string) => void;
};
