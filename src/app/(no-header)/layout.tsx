import { ReactNode } from 'react';

import { CustomHeader } from '@/components/common';
import { TransitionWrapper } from '@/providers/TransitionProvider';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-dvh bg-gray-50 flex flex-col relative overflow-hidden">
      <CustomHeader />
      <main className="flex-1 flex flex-col page-transition-wrapper min-h-0">
        <TransitionWrapper className="flex-1 flex flex-col min-h-0">{children}</TransitionWrapper>
      </main>
    </div>
  );
}
