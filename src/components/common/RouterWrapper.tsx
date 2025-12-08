'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { flushSync } from 'react-dom';

import { RouterWrapperContext } from '@/contexts/RouterWrapperContext';

export function RouterWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isBrowserNavigation, setIsBrowserNavigation] = useState(false);
  const isAppNavigationRef = useRef<boolean>(false);

  const handlePopState = () => {
    if (isAppNavigationRef.current) {
      isAppNavigationRef.current = false;
      return;
    }
    setIsBrowserNavigation(true);
  };

  // 라우터 메소드 래핑
  const wrappedPush = (url: string) => {
    setIsBrowserNavigation(false);
    setDirection('forward');
    router.push(url);
  };

  const wrappedBack = () => {
    isAppNavigationRef.current = true;
    setIsBrowserNavigation(false);
    setDirection('backward');
    router.back();
  };

  // 브라우저 앞으로가기/뒤로가기 감지
  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterWrapperContext.Provider
      value={{ direction, setDirection, wrappedPush, wrappedBack, isBrowserNavigation }}
    >
      {children}
    </RouterWrapperContext.Provider>
  );
}
