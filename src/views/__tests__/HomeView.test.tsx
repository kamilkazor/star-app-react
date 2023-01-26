import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomeView from "../HomeView";

describe("HomeView", () => {
  interface WrapperProps {
    children: React.ReactNode;
  }
  function Wrapper({ children }: WrapperProps) {
    return (
      <HashRouter>
        <HelmetProvider>{children}</HelmetProvider>
      </HashRouter>
    );
  }
  it("renders properly", () => {
    render(<HomeView />, { wrapper: Wrapper });

    expect(screen.getByRole("heading", { level: 1 }));
  });
});
