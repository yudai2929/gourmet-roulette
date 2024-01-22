"use client";

import { trpc } from "@/utils/trpc";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { httpBatchLink } from "@trpc/client";
import { useIsSP } from "@/hooks/helper/mediaQuery";
import { Header } from "@/components/ui/Header/Header";

const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

const SpProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSp } = useIsSP();
  if (isSp) {
    return <>{children}</>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <p>PCでは このページは表示できません</p>
    </div>
  );
};

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <SpProvider>
        <TrpcProvider>
          <HeaderProvider>{children}</HeaderProvider>
        </TrpcProvider>
      </SpProvider>
    </ChakraProvider>
  );
}
