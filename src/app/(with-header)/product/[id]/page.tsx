import { productMockData } from '@/api/mock';
import ProductDetailContainer from '@/components/features/product/detail/ProductDetailContainer';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => ({ id: String(id) }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const product = productMockData[Number(id) - 1];

  return <ProductDetailContainer product={product} />;
};

export default Page;
