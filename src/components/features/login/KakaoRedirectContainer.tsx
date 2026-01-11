'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { isEmpty } from 'lodash-es';

import { useCartService, useLoginService } from '@/service';
import { useAlertStore, useCartStore, useLoginStore } from '@/stores';
import { loginActions } from '@/stores/useLoginStore';
import { ResultCode } from '@/types';

interface Props {
  code: string;
}

const KakaoRedirectContainer = ({ code }: Props) => {
  const router = useRouter();
  const { showConfirmAlert } = useAlertStore();
  const { setLoginInfo, clearLoginInfo } = useLoginStore();
  const { cart, _hasHydrated } = useCartStore();

  const { useGetAccessTokenByKakaoCode } = useLoginService();
  const { useUpdateCartListMutation } = useCartService();

  const { mutate: getAccessTokenByKakaoCode, isPending } = useGetAccessTokenByKakaoCode();
  const { mutateAsync: updateCartListAsync } = useUpdateCartListMutation();

  const callbackKakaoLogin = () => {
    getAccessTokenByKakaoCode(
      { code },
      {
        onSuccess: async ({ code, data }) => {
          if (code === ResultCode.SUCCESS) {
            const url = loginActions.getLoginInfo().redirectUrl || '/';

            const { accessToken, userId, username, email, loginType, customerKey, phone } = data;
            setLoginInfo({
              accessToken,
              isLogin: true,
              redirectUrl: '/',
              user: { email, username, userId, customerKey, phone },
              loginType,
            });

            if (!isEmpty(cart)) {
              await updateCartListAsync(cart);
            }

            router.replace(url);
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
    if (_hasHydrated) {
      callbackKakaoLogin();
    }
  }, [_hasHydrated]);

  return isPending && <p className="mt-[150px] text-lg">Kakao Login Processing...</p>;
};

export default KakaoRedirectContainer;
