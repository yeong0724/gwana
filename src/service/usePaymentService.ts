import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createPaymentSession,
  getPaymentSession,
  requestPaymentApprove,
  savePaymentInfo,
} from '@/api/payment';
import {
  CreatePaymentSessionRequest,
  GetPaymentSessionRequest,
  RequestPaymentApproveRequest,
  SavePaymentInfoRequest,
  UseQueryOptionsType,
} from '@/types';

const usePaymentService = () => {
  const useSavePaymentInfoMutation = () =>
    useMutation({
      mutationFn: (param: SavePaymentInfoRequest) => savePaymentInfo(param),
    });

  const useCreatePaymentSessionMutation = () =>
    useMutation({
      mutationFn: (param: CreatePaymentSessionRequest[]) => createPaymentSession(param),
    });

  const useRequestPaymentApproveMutation = () =>
    useMutation({
      mutationFn: (param: RequestPaymentApproveRequest) => requestPaymentApprove(param),
    });

  const useGetPaymentSessionQuery = (
    payload: GetPaymentSessionRequest,
    options?: UseQueryOptionsType
  ) =>
    useQuery({
      queryKey: ['paymentSession', payload.sessionId],
      queryFn: () => getPaymentSession(payload),
      ...options,
    });

  return {
    useCreatePaymentSessionMutation,
    useGetPaymentSessionQuery,
    useSavePaymentInfoMutation,
    useRequestPaymentApproveMutation,
  };
};

export default usePaymentService;
