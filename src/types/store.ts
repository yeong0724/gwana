export type LoginInfo = {
  isLogin: boolean;
  accessToken: string;
  from: string;
};

export type UserStore = {
  loginInfo: LoginInfo;
  setIsLogin: (isLogin: boolean) => void;
  setAccessToken: (accessToken: string) => void;
  setLoginInfo: (userInfo: LoginInfo) => void;
  setFrom: (from: string) => void;
  clearLoginInfo: () => void;
};
