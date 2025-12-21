import { ReactNode } from 'react';

import { CustomHeader } from '@/components/common';
import { TransitionWrapper } from '@/providers/TransitionProvider';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen bg-gray-50 flex flex-col relative overflow-hidden">
      <CustomHeader />
      <TransitionWrapper className="flex-1 flex flex-col min-h-0">{children}</TransitionWrapper>
    </div>
  );
}
