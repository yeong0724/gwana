'use client';

import useNativeRouter from '@/hooks/useNativeRouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircleQuestion, PenLine, Inbox, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Inquiry {
  id: number;
  title: string;
  status: 'pending' | 'answered';
  createdAt: string;
}

// 예시 데이터
const mockInquiryList: Inquiry[] = [
  {
    id: 1,
    title: '배송 관련 문의드립니다',
    status: 'answered',
    createdAt: '2025-01-20',
  },
  {
    id: 2,
    title: '주문 취소는 어떻게 하나요?',
    status: 'answered',
    createdAt: '2025-01-18',
  },
  {
    id: 3,
    title: '상품 교환 요청합니다',
    status: 'pending',
    createdAt: '2025-01-15',
  },
  {
    id: 4,
    title: '결제 오류가 발생했어요',
    status: 'pending',
    createdAt: '2025-01-12',
  },
  {
    id: 5,
    title: '회원 등급 관련 문의',
    status: 'answered',
    createdAt: '2025-01-10',
  },
  {
    id: 6,
    title: '배송 관련 문의드립니다',
    status: 'answered',
    createdAt: '2025-01-20',
  },
  {
    id: 7,
    title: '주문 취소는 어떻게 하나요?',
    status: 'answered',
    createdAt: '2025-01-18',
  },
  {
    id: 8,
    title: '상품 교환 요청합니다',
    status: 'pending',
    createdAt: '2025-01-15',
  },
  {
    id: 9,
    title: '결제 오류가 발생했어요',
    status: 'pending',
    createdAt: '2025-01-12',
  },
  {
    id: 10,
    title: '회원 등급 관련 문의',
    status: 'answered',
    createdAt: '2025-01-10',
  },
];

const InquiryContainer = () => {
  const { forward } = useNativeRouter();
  const router = useRouter();

  const inquiryList: Inquiry[] = mockInquiryList;

  const handleWriteInquiry = () => {
    forward('/mypage/inquiry/write');
  };

  // PC 버전
  const renderPcView = () => {
    return (
      <div className="hidden lg:block">
        <h1>InquiryContainer</h1>
      </div>
    );
  };

  useEffect(() => {
    router.prefetch('/mypage/inquiry/write');
  }, []);

  return (
    <>
      {renderPcView()}
      <div className="lg:hidden bg-white h-[calc(100dvh-56px)] pt-6 flex flex-col overflow-hidden">
        <div className="max-w-md mx-auto w-full flex-1 flex flex-col min-h-0">
          {/* 헤더: 타이틀 + 문의 작성 버튼 */}
          <div className="flex items-center justify-between mb-[1px] pb-4 border-b border-gray-200 px-4">
            <div className="flex items-center gap-2 pl-[5px]">
              <MessageCircleQuestion className="size-6 text-[#A8BF6A]" />
              <span className="text-xl font-bold text-gray-800">문의 내역</span>
            </div>
            <Button
              onClick={handleWriteInquiry}
              className="bg-[#A8BF6A] hover:bg-[#96ad5c] text-white gap-2"
            >
              <PenLine className="size-4" />
              문의 작성
            </Button>
          </div>

          {/* 문의 리스트 영역 */}
          {inquiryList.length === 0 ? (
            // 빈 상태 UI (카드로 감싸기)
            <Card className="flex-1 flex flex-col">
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                  <Inbox className="size-16 mb-4 text-gray-300" />
                  <p className="text-lg font-medium">등록된 문의가 없습니다</p>
                  <p className="text-sm mt-1">궁금한 점이 있으시면 문의해 주세요</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            // 문의 리스트 (카드 없이)
            <ul className="divide-y divide-gray-100 overflow-y-auto flex-1 min-h-0 px-4">
              {inquiryList.map((inquiry) => (
                <li key={inquiry.id}>
                  <button
                    className="w-full py-4 px-2 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-gray-800 font-medium truncate">{inquiry.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-400">{inquiry.createdAt}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${inquiry.status === 'answered'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-amber-100 text-amber-600'
                            }`}
                        >
                          {inquiry.status === 'answered' ? '답변완료' : '대기중'}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="size-5 text-gray-400 flex-shrink-0 ml-2" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default InquiryContainer;