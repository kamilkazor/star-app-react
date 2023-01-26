import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import StarshipsView from "../StarshipsView";

describe("StarshipsView", () => {
  interface WrapperProps {
    children: React.ReactNode;
  }
  function Wrapper({ children }: WrapperProps) {
    const queryClient = new QueryClient();
    return (
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>{children}</HelmetProvider>
        </QueryClientProvider>
      </HashRouter>
    );
  }
  it("renders properly", () => {
    render(<StarshipsView />, { wrapper: Wrapper });

    expect(screen.getByRole("heading", { level: 1 }));
  });
});
