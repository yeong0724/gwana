import {
  addToCart,
  deleteCart,
  deleteCartList,
  getCartList,
  updateCartList,
  updateCartQuantity,
} from '@/api/cart';
import {
  AddToCartRequest,
  DeleteCartRequest,
  UpdateCartRequest,
  UseQueryOptionsType,
} from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';

const useCartService = () => {
  const useAddToCartMutation = () =>
    useMutation({
      mutationFn: (param: AddToCartRequest) => addToCart(param),
    });

  const useUpdateCartListMutation = () =>
    useMutation({
      mutationFn: (param: UpdateCartRequest[]) => updateCartList(param),
    });

  const useDeleteCartListMutation = () =>
    useMutation({
      mutationFn: (param: string[]) => deleteCartList(param),
    });

  const useDeleteCartMutation = () =>
    useMutation({
      mutationFn: (param: DeleteCartRequest) => deleteCart(param),
    });

  const useUpdateCartQuantityMutation = () =>
    useMutation({
      mutationFn: (param: AddToCartRequest) => updateCartQuantity(param),
    });

  const useGetCartListQuery = (options?: UseQueryOptionsType) =>
    useQuery({
      queryKey: ['cartList'],
      queryFn: () => getCartList(),
      ...options,
    });

  return {
    useAddToCartMutation,
    useGetCartListQuery,
    useUpdateCartListMutation,
    useDeleteCartListMutation,
    useDeleteCartMutation,
    useUpdateCartQuantityMutation,
  };
};

export default useCartService;
