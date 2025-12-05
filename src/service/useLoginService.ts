import { useMutation } from '@tanstack/react-query';

import { getAccessTokenByKakaoCode, kakaoLogout, refreshAccessToken } from '@/api/login';
import {
  GetAccessTokenByKakaoCodeRequest,
  KakaoLogoutRequest,
  RefreshAccessTokenRequest,
} from '@/types';

const useLoginService = () => {
  const useGetAccessTokenByKakaoCode = () =>
    useMutation({
      mutationFn: (param: GetAccessTokenByKakaoCodeRequest) => getAccessTokenByKakaoCode(param),
    });

  const useRefreshAccessToken = () =>
    useMutation({
      mutationFn: (param: RefreshAccessTokenRequest) => refreshAccessToken(param),
    });

  const useKakaoLogout = () =>
    useMutation({
      mutationFn: (param: KakaoLogoutRequest) => kakaoLogout(param),
    });

  return { useGetAccessTokenByKakaoCode, useRefreshAccessToken, useKakaoLogout };
};

export default useLoginService;
