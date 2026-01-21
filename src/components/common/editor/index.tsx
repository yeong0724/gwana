'use client';

import dynamic from 'next/dynamic';

const TiptapEditor = dynamic(() => import('@/components/common/editor/TiptapEditor'), {
  ssr: false,
  loading: () => (
    <div className="h-64 border rounded-lg animate-pulse bg-gray-100" />
  ),
});

export default TiptapEditor;