'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { allClearPersistStore, getAccessToken } from '@/lib/utils';
import { useLoginService } from '@/service';

const KakaoLogoutRedirect = () => {
  const router = useRouter();
  const { useKakaoLogout } = useLoginService();

  const { mutate: kakaoLogoutMutate, isPending } = useKakaoLogout();

  const callbackKakaoLogout = () => {
    const accessToken = getAccessToken();
    kakaoLogoutMutate(
      { accessToken },
      {
        onSuccess: () => {
          allClearPersistStore();
          router.push('/');
        },
      }
    );
  };

  useEffect(() => callbackKakaoLogout(), []);

  return isPending && <p className="mt-[150px] text-lg">Kakao Logout Redirecting...</p>;
};

export default KakaoLogoutRedirect;
