import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { useLoginStore } from '@/stores';
import { MyinfoForm } from '@/types';

const useMyinfoForm = () => {
  const { user, isLogin, _hasHydrated } = useLoginStore();

  const form = useForm<MyinfoForm>({
    resolver: zodResolver(
      z.object({
        profileImage: z.string().nullable(),
        email: z.string().email({ message: '이메일 형식이 올바르지 않습니다' }),
        username: z.string().min(3, { message: '이름을 입력해주세요' }),
        phoneFirst: z.string().length(3),
        phoneMiddle: z.string().length(4),
        phoneLast: z.string().length(4),
        zonecode: z.string().min(1, { message: '우편번호를 입력해주세요' }),
        roadAddress: z.string().min(1, { message: '도로명 주소를 입력해주세요' }),
        detailAddress: z.string().min(1, { message: '상세 주소를 입력해주세요' }),
      })
    ),
    defaultValues: {
      profileImage: null,
      email: '',
      username: '',
      phoneFirst: '',
      phoneMiddle: '',
      phoneLast: '',
      zonecode: '',
      roadAddress: '',
      detailAddress: '',
    },
    mode: 'onSubmit',
  });

  const {
    setValue,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (_hasHydrated && isLogin) {
      const { email, username, phone, profileImage } = user;
      setValue('profileImage', profileImage ?? null);
      setValue('email', email);
      setValue('username', username);
      setValue('phoneFirst', phone?.slice(0, 3));
      setValue('phoneMiddle', phone?.slice(3, 7));
      setValue('phoneLast', phone?.slice(7));
    }
  }, [_hasHydrated, isLogin]);

  return { form, setValue, handleSubmit, clearErrors, errors, watch };
};

export default useMyinfoForm;
