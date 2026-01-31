import ReviewContainer from "@/components/features/mypage/review/ReviewContainer";

interface Props {
  searchParams: Promise<{ productId: string }>;
}

const Page = async ({ searchParams }: Props) => {
  const { productId } = await searchParams;

  return <ReviewContainer productId={productId} />;
};

export default Page;