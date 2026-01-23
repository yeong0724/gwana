import { uploadProfileImage } from "@/api/mypage";
import { useMutation } from "@tanstack/react-query";

const useMypageService = () => {

  const useProfileImageUploadMutation = () => {
    return useMutation({
      mutationFn: (param: FormData) => uploadProfileImage(param),
    });
  };

  return {
    useProfileImageUploadMutation,
  };
}

export default useMypageService;