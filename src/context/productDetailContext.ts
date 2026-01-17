import { CarouselApi } from '@/components/ui/carousel';
import createGenericContext from '@/providers/ContextProvider';
import { ProductDetailResponse, ProductOption, PurchaseList } from '@/types';

type ProductDetailStateContextType = {
  product: ProductDetailResponse;
  api: CarouselApi;
  current: number;
  isMounted: boolean;
  isBottomPanelOpen: boolean;
  purchaseList: PurchaseList[];
  totalPrice: number;
};

type ProductDetailControllerContextType = {
  setApi: (api: CarouselApi) => void;
  setCurrent: (current: number) => void;
  handleShare: () => void;
  setIsBottomPanelOpen: (isBottomPanelOpen: boolean) => void;
  onOptionSelect: (option: ProductOption) => void;
  setPurchaseList: (purchaseList: PurchaseList[]) => void;
  handleQuantityChange: (index: number, quantity: number) => void;
  onCartMobileHandler: () => void;
  onPurchaseMobileHandler: () => void;
  handleAddToCart: () => void;
  handlePurchase: () => void;
};

export const { Provider, useStateContext, useControllerContext } = createGenericContext<
  ProductDetailStateContextType,
  ProductDetailControllerContextType
>();
