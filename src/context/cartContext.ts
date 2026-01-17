import createGenericContext from '@/providers/ContextProvider';
import { Cart, CartState } from '@/types';

type CartStateContextType = {
  cart: CartState[];
  isNoSelect: boolean;
  totalProductPrice: number;
  totalShippingPrice: number;
};

type CartControllerContextType = {
  moveToOrderPage: () => void;
  onAllCheckboxHandler: (checked: boolean) => void;
  onDeleteCartList: () => void;
  onCheckboxHandler: (checked: boolean, index: number) => void;
  onUpdateCartQuantity: (
    productId: string,
    optionId: string,
    quantity: number,
    index: number,
    optionRequired: boolean,
    quantityDelta: number
  ) => void;
  onDeleteCart: (cartId: string, optionId: string, index: number) => void;
  getSumProductPrice: (item: Cart) => number;
  getShippingPrice: (item: Cart) => number;
};

export const { Provider, useStateContext, useControllerContext } = createGenericContext<
  CartStateContextType,
  CartControllerContextType
>();
