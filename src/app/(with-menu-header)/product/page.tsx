import PageTransition from '@/components/common/PageTransition';
import ProductContainer from '@/components/features/product/ProductContainer';

type PageProps = {
  searchParams: Promise<{ category: string }>;
};

const Page = async ({ searchParams }: PageProps) => {
  const { category } = await searchParams;

  return (
    <PageTransition>
      <ProductContainer categoryId={category} />
    </PageTransition>
  );
};

export default Page;
