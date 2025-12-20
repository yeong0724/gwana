import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { FlowType } from '@/types/enum';

type TransitionsContextType = {
  flowType: MutableRefObject<FlowType | null>;
  className: string;
  setClassName: Dispatch<SetStateAction<string>>;
  animationDuration: number; // Duration of the animation, in miliseconds
  navigationResolveRef: MutableRefObject<(() => void) | null>;
};

export type { TransitionsContextType };
