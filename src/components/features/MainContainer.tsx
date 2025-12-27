'use client';

import { ReactNode } from 'react';

const MainContainer = () => {
  // const { setLoginInfo, loginInfo, _hasHydrated } = useLoginStore();
  // const { useRefreshAccessToken } = useLoginService();

  // const { mutateAsync: refreshAccessTokenMutate } = useRefreshAccessToken();

  // const onCheckLoginStatus = async () => {
  //   const { accessToken } = loginInfo;
  //   if (!accessToken) {
  //     setLoginInfo({ isLogin: false, accessToken });
  //     return;
  //   }

  //   // Access Token이 아직 유효한 경우
  //   if (validateToken(accessToken)) {
  //     onLoginSuccess(accessToken);
  //     return;
  //   }

  //   // Access Token 만료 시 갱신 시도
  //   try {
  //     const { code, data } = await refreshAccessTokenMutate({ accessToken });
  //     if (code === ResultCode.SUCCESS) {
  //       onLoginSuccess(data);
  //     } else {
  //       allClearPersistStore();
  //     }
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (error) {
  //     allClearPersistStore();
  //   }
  // };

  // const onLoginSuccess = async (accessToken: string) => {
  //   setLoginInfo({ isLogin: true, accessToken });
  // };

  // useEffect(() => {
  //   // hydration이 완료된 후에만 로그인 체크 수행
  //   if (_hasHydrated) {
  //     onCheckLoginStatus();
  //   }
  // }, [_hasHydrated]);

  return (
    <div>
      <video
        src="/videos/tea_drip.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <video
        src="/videos/gwana_intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MainContainer;
