import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Props = {
  cartGuideModalOpen: boolean;
  setCartGuideModalOpen: (open: boolean) => void;
};

const CartGuideModal = ({ cartGuideModalOpen, setCartGuideModalOpen }: Props) => {
  const onClose = () => {
    setCartGuideModalOpen(false);
  };

  return (
    <Dialog open={cartGuideModalOpen} onOpenChange={setCartGuideModalOpen}>
      <DialogContent className="[&_button[data-slot='dialog-close']]:cursor-pointer [&_button[data-slot='dialog-close']_svg]:size-[24px] min-h-[215px] flex flex-col sm:max-w-[400px]">
        <DialogHeader className="border-b-2 border-black pb-4 text-left">
          <DialogTitle>장바구니</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div>상품이 장바구니에 담겼습니다.</div>
        </div>
        <DialogFooter className="flex-row justify-center gap-3 sm:flex-row mt-auto">
          <Button variant="default" onClick={onClose} className="flex-1 cursor-pointer">
            계속 쇼핑
          </Button>
          <Button
            onClick={onClose}
            variant="default"
            className="flex-1 cursor-pointer bg-teal-600 text-white hover:bg-teal-700"
          >
            장바구니 가기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartGuideModal;
