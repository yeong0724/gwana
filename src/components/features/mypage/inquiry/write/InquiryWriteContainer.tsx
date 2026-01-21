'use client';

import TiptapEditor from '@/components/common/editor';
import { useState } from 'react';

const InquiryWriteContainer = () => {

  const [content, setContent] = useState<string>('');

  return (
    <div>
      <TiptapEditor value={content} onChange={setContent} />
    </div>
  );
};

export default InquiryWriteContainer;