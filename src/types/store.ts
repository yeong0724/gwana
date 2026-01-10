export type LoginInfo = {
  isLogin: boolean;
  accessToken: string;
  redirectUrl: string;
  loginType: 'KAKAO' | 'NAVER' | 'GOOGLE' | '';
  user: {
    email: string;
    username: string;
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
