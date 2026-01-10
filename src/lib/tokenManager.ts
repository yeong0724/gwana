import { basicInstance } from '@/lib/api';
import { loginActions } from '@/stores/useLoginStore';

let refreshPromise: Promise<string> | null = null;

export const refreshAccessTokenSingleton = async (): Promise<string> => {
  if (refreshPromise) return refreshPromise;

  refreshPromise = refreshAccessToken().finally(() => {
    refreshPromise = null;
  });

  return refreshPromise;
};

const refreshAccessToken = async (): Promise<string> => {
  const { accessToken } = loginActions.getLoginInfo();
  const {
    data: { data, code },
  } = await basicInstance.post('/user/refresh/token', { accessToken });

  if (code === '0000') {
    const { accessToken: newAccessToken, loginType, username, email } = data;
    loginActions.setLoginInfo({
      accessToken: newAccessToken,
      user: { username, email },
      isLogin: true,
      redirectUrl: '/',
      loginType,
    });

    return newAccessToken;
  }

  throw new Error('Refresh failed');
};
