import { postAxios } from "@/lib/api";
import { ApiResponse } from "@/types";

const uploadProfileImage = async (params: FormData) => {
  return postAxios<ApiResponse<string>>({
    url: '/mypage/upload/profile-image',
    params,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export { uploadProfileImage };