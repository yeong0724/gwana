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
  console.log('refreshAccessTokenSingleton > refreshAccessToken :', accessToken);
  const { data } = await basicInstance.post('/user/refresh/token', { accessToken });
  console.log('refreshAccessTokenSingleton > data :', data);
  if (data.code === '0000') {
    loginActions.setLoginInfo({
      accessToken: data.data,
      isLogin: true,
      redirectUrl: '/',
    });
    return data.data;
  }

  throw new Error('Refresh failed');
};
