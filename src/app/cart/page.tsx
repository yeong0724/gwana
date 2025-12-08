import PageTransition from '@/components/common/PageTransition';
import CartContainer from '@/components/features/cart/CartContainer';

const Page = () => {
  return (
    <PageTransition>
      <CartContainer />
    </PageTransition>
  );
};

export default Page;
