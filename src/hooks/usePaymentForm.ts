import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { useLoginStore } from '@/stores';
import { DeliveryRequestEnum, PaymentForm } from '@/types';

const usePaymentForm = () => {
  const { user, _hasHydrated } = useLoginStore();

  const form = useForm<PaymentForm>({
    resolver: zodResolver(
      z
        .object({
          senderName: z.string().min(1, { message: '주문고객 이름을 입력해주세요' }),
          senderPhone: z.string().min(1, { message: '주문고객 휴대폰 번호를 입력해주세요' }),
          recipientName: z.string().min(1, { message: '받는 사람 이름을 입력해주세요' }),
          recipientPhone: z.string().min(1, { message: '받는 사람 휴대폰 번호를 입력해주세요' }),
          zonecode: z.string().min(1, { message: '우편번호를 입력해주세요' }),
          roadAddress: z.string().min(1, { message: '도로명 주소를 입력해주세요' }),
          detailAddress: z.string().min(1, { message: '상세 주소를 입력해주세요' }),
          deliveryRequest: z.string().min(1, { message: '배송요청사항을 선택해주세요' }),
          deliveryRequestDetail: z.string(),
        })
        .superRefine((data, ctx) => {
          if (
            data.deliveryRequest === DeliveryRequestEnum.CUSTOM_INPUT &&
            !data.deliveryRequestDetail
          ) {
            ctx.addIssue({
              code: 'custom',
              message: '배송요청사항을 입력해주세요',
              path: ['deliveryRequestDetail'],
            });
          }
        })
    ),
    defaultValues: {
      senderName: '',
      senderPhone: '',
      recipientName: '',
      recipientPhone: '',
      zonecode: '',
      roadAddress: '',
      detailAddress: '',
      deliveryRequest: '',
      deliveryRequestDetail: '',
    },
    mode: 'onSubmit',
  });

  const { setValue, clearErrors, watch } = form;

  // hydration 완료 후 store의 user 정보로 form 값 업데이트
  useEffect(() => {
    if (_hasHydrated && user.username) {
      setValue('senderName', user.username);
      setValue('senderPhone', user?.phone?.replace('+82 ', '0').replaceAll('-', '') || '');
    }
  }, [_hasHydrated, user.username, user.phone, setValue]);

  return { form, setValue, clearErrors, watch };
};

export default usePaymentForm;
