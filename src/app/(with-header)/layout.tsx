'use client';

import { ReactNode } from 'react';

import MainLayout from '@/components/layout/MainLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <MainLayout>{children}</MainLayout>;
}
