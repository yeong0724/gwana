import PageTransition from '@/components/common/PageTransition';
import ProductDetailContainer from '@/components/features/product/detail/ProductDetailContainer';

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <PageTransition>
      <ProductDetailContainer productId={id} />
    </PageTransition>
  );
};

export default Page;
