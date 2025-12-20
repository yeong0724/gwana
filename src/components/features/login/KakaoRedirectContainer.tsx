'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { cloneDeep, isEmpty } from 'lodash-es';

import { useCartService, useLoginService } from '@/service';
import { useAlertStore, useCartStore, useLoginStore } from '@/stores';
import { ResultCode } from '@/types';

interface Props {
  code: string;
}

const KakaoRedirectContainer = ({ code }: Props) => {
  const router = useRouter();
  const { showConfirmAlert } = useAlertStore();
  const { setLoginInfo, clearLoginInfo, from } = useLoginStore();
  const { cart, _hasHydrated } = useCartStore();

  const { useGetAccessTokenByKakaoCode } = useLoginService();
  const { useUpdateCartListMutation } = useCartService();

  const { mutate: getAccessTokenByKakaoCode } = useGetAccessTokenByKakaoCode();
  const { mutate: updateCartListMutate } = useUpdateCartListMutation();

  const callbackKakaoLogin = () => {
    getAccessTokenByKakaoCode(
      { code },
      {
        onSuccess: async ({ code, data }) => {
          if (code === ResultCode.SUCCESS) {
            const backUrl = cloneDeep(from);

            setLoginInfo({ accessToken: data, isLogin: true, from: '/' });

            if (!isEmpty(cart)) updateCartListMutate(cart);

            router.push(backUrl);
          }
        },
        onError: async () => {
          const confirm = await showConfirmAlert({
            title: '에러',
            description: '카카오 로그인을 실패하였습니다.',
            size: 'sm',
          });

          if (confirm) {
            clearLoginInfo();
            router.push('/login');
          }
        },
      }
    );
  };

  useEffect(() => {
    if (_hasHydrated) callbackKakaoLogin();
  }, [_hasHydrated]);

  return <p className="mt-[150px] text-lg">Kakao Login Processing...</p>;
};

export default KakaoRedirectContainer;
