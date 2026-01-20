"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLoginStore } from "@/stores";
import {
  ChevronRight,
  ClipboardList,
  MessageSquareText,
  Pencil,
  Search,
  ShoppingCart,
  UserX2Icon,
  Truck,
  MessageCircleQuestion,
  UserXIcon,
  User
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 하드코딩된 유저 데이터
const userData = {
  name: "최혜지",
  profileImage: "/images/profile-placeholder.png",
};

// 하드코딩된 통계 데이터
const statsData = [
  {
    icon: Truck,
    count: 3,
    label: "주문내역",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: ClipboardList,
    count: 1,
    label: "내가 쓴 리뷰",
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    icon: MessageCircleQuestion,
    count: 0,
    label: "문의내역",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
];

// 메뉴 데이터
const menuItems = [
  { icon: User, label: "개인 정보 수정", href: "/mypage/profile" },
  { icon: Truck, label: "주문 조회", href: "/mypage/orders" },
  { icon: MessageCircleQuestion, label: "문의 하기", href: "/mypage/inquiry" },
  { icon: ShoppingCart, label: "장바구니", href: "/cart" },
];

const MypageContainer = () => {
  const router = useRouter();
  const { _hasHydrated, loginInfo: { user, isLogin } } = useLoginStore();


  useEffect(() => {
    if (!_hasHydrated) return;

    if (!isLogin) {
      router.push('/login');
    }
  }, [_hasHydrated]);
  return (
    <div className="bg-white py-6 px-4 flex flex-col">
      <div className="max-w-md mx-auto space-y-4 flex-1 w-full">
        {/* 섹션 1: 유저 정보 */}
        <Card className="py-0 overflow-hidden">
          <div className="bg-[#A8BF6A] p-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-20 border-2 border-white shadow-md">
                <AvatarImage src={userData.profileImage} alt={user.username} />
                <AvatarFallback className="bg-white text-black text-xl font-bold">
                  {user.username.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="text-white">
                <p className="text-[20px] font-bold opacity-90 tracking-widest">WELCOME</p>
                <p className="text-xl font-medium">{user.username} 님</p>
              </div>
            </div>
          </div>
        </Card>

        {/* 섹션 2: 통계 */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`size-6 ${stat.color}`} />
                  </div>
                  <span className="text-2xl font-bold text-gray-800">
                    {stat.count}
                  </span>
                  <span className="text-xs text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 섹션 3: 메뉴 리스트 */}
        <Card className="py-0">
          <CardContent className="p-0">
            <ul className="divide-y divide-gray-100">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full flex items-center justify-between px-4 py-4 h-auto hover:bg-gray-50 transition-colors rounded-none"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="size-5 text-gray-400" />
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <ChevronRight className="size-5 text-gray-400" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>

      {/* 회원 탈퇴 버튼 - 맨 하단 고정 */}
      <div className="max-w-md mx-auto w-full py-4 flex items-center justify-center">
        <Button
          className="flex items-center justify-center gap-2 text-[15px] text-red-400 hover:text-gray-500 transition-colors bg-white border-0 tracking-wider"
        >
          <UserX2Icon className="size-4" />
          <span>회원 탈퇴</span>
        </Button>
      </div>
    </div>
  );
};

export default MypageContainer;