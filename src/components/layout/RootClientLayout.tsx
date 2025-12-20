'use client';

import React, { useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { GlobalAlert, GlobalLoading } from '@/components/common';
import { Toaster } from '@/components/ui/sonner';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { TransitionsContext } from '@/providers/TransitionProvider';

export default function RootClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const context = useContext(TransitionsContext);

  // 페이지 전환 완료 감지 및 신호 전송
  useEffect(() => {
    if (context?.navigationResolveRef.current) {
      context.navigationResolveRef.current();
      context.navigationResolveRef.current = null;
    }
  }, [pathname, context]);

  return (
    <body className="min-h-dvh flex flex-col">
      <ReactQueryProvider>
        {children}
        <GlobalAlert />
        <Toaster />
        <GlobalLoading />
      </ReactQueryProvider>
    </body>
  );
}
