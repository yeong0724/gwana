'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { ChevronLeft, Home } from 'lucide-react';

import { usePageTransitions } from '@/hooks/usePageTransitions';

type Props = {
  title?: string;
};
const CustomHeader = ({ title: propsTitle }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const transitions = usePageTransitions();

  const title = useMemo(() => {
    if (propsTitle) return propsTitle;
    if (pathname.startsWith('/cart')) return '장바구니';
    if (pathname.startsWith('/payment')) return '주문/결제';
    if (pathname.startsWith('/login')) return '로그인';
    return '';
  }, [propsTitle, pathname]);

  const goBack = () => {
    if (pathname === '/payment') {
      transitions.goBackWithTransition();
    } else {
      router.back();
    }
  };

  return (
    <header className="relative flex items-center justify-center p-4 border-b border-gray-200 w-full flex-shrink-0 bg-white page-header">
      <h1 className="text-[18px] sm:text-[19px] md:text-[20px] lg:text-[22px] font-semibold text-gray-900">
        {title}
      </h1>
      <button
        className="absolute left-4 p-2 hover:bg-gray-100 rounded-md transition-colors"
        onClick={goBack}
      >
        <ChevronLeft size={20} className="text-gray-700 sm:w-6 sm:h-6" />
      </button>
      <button
        className="absolute right-3 sm:right-4 p-2 hover:bg-gray-100 rounded-md transition-colors"
        onClick={() => router.push('/')}
      >
        <Home size={20} className="text-gray-700 sm:w-6 sm:h-6" />
      </button>
    </header>
  );
};

export default CustomHeader;
