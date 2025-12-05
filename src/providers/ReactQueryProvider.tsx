'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
  children: Readonly<React.ReactNode>;
};
const ReactQueryProvider = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
