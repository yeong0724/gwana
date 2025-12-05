'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

type Props = {
  handleLogout: () => void;
  moveToMyPage: () => void;
  moveToOrderHistory: () => void;
};

const UserDropdownContent = ({ handleLogout, moveToMyPage, moveToOrderHistory }: Props) => {
  const arrowStyle = {
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid white',
    filter: 'drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.1))',
  };

  const arrowBorderStyle = {
    width: 0,
    height: 0,
    borderLeft: '9px solid transparent',
    borderRight: '9px solid transparent',
    borderBottom: '9px solid #e5e7eb',
  };

  return (
    <DropdownMenuContent
      align="end"
      sideOffset={4}
      className="w-48 scale-110 relative bg-white rounded-xl shadow-lg border border-gray-200 p-2 !overflow-visible origin-top-right"
    >
      {/* 삼각형 화살표 */}
      <div className="absolute -top-2 right-[10%] z-10 pointer-events-none" style={arrowStyle} />
      <div
        className="absolute -top-2.5 right-[10%] z-0 pointer-events-none"
        style={arrowBorderStyle}
      />
      <DropdownMenuItem
        onClick={moveToMyPage}
        className="cursor-pointer text-base py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        마이페이지
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={moveToOrderHistory}
        className="cursor-pointer text-base py-2.5 px-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        주문조회
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-1" />
      <DropdownMenuItem
        onClick={handleLogout}
        className="cursor-pointer text-base py-2.5 px-3 rounded-lg hover:bg-red-50 transition-colors text-red-600 focus:text-red-600 focus:bg-red-50"
      >
        로그아웃
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default UserDropdownContent;
