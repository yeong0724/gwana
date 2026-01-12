import { postAxios } from '@/lib/api';
import {
  ApiResponse,
  CreatePaymentSessionRequest,
  GetPaymentSessionRequest,
  PaymentSessionResponse,
  RequestPaymentApproveRequest,
  RequestPaymentApproveResponse,
  SavePaymentInfoRequest,
} from '@/types';

const createPaymentSession = async (params: CreatePaymentSessionRequest[]) => {
  return postAxios<ApiResponse<string>>({
    url: '/payment/create/session',
    params,
  });
};

const getPaymentSession = async (params: GetPaymentSessionRequest) => {
  return postAxios<ApiResponse<PaymentSessionResponse>>({
    url: '/payment/search/session',
    params,
  });
};

const savePaymentInfo = async (params: SavePaymentInfoRequest) => {
  return postAxios<ApiResponse<void>>({
    url: '/payment/save/info',
    params,
  });
};

const requestPaymentApprove = async (params: RequestPaymentApproveRequest) => {
  return postAxios<ApiResponse<RequestPaymentApproveResponse>>({
    url: '/payment/request/approve',
    params,
  });
};

export { createPaymentSession, getPaymentSession, savePaymentInfo, requestPaymentApprove };
