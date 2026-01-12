import { postAxios } from '@/lib/api';
import {
  ApiResponse,
  Product,
  ProductDetailRequest,
  ProductDetailResponse,
  ProductListRequest,
} from '@/types';

const getProductList = async (params: ProductListRequest) => {
  return postAxios<ApiResponse<Product[]>>({
    url: '/product/list',
    params,
  });
};

const getProductDetail = async (params: ProductDetailRequest) => {
  return postAxios<ApiResponse<ProductDetailResponse>>({
    url: '/product/detail',
    params,
  });
};

export { getProductList, getProductDetail };
