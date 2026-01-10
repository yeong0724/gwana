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
  const { accessToken, loginType, user } = loginActions.getLoginInfo();
  const { data } = await basicInstance.post('/user/refresh/token', { accessToken });

  const { data: newAccessToken, code } = data;
  if (code === '0000') {
    loginActions.setLoginInfo({
      accessToken: newAccessToken,
      user,
      isLogin: true,
      redirectUrl: '/',
      loginType,
    });

    return newAccessToken;
  }

  throw new Error('Refresh failed');
};
