import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import BrowseStarships from "../BrowseStarships";

describe("BrowseStarships", async () => {
  interface WrapperProps {
    children: React.ReactNode;
  }
  function Wrapper({ children }: WrapperProps) {
    const queryClient = new QueryClient();
    return (
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </HashRouter>
    );
  }
  it("renders properly", () => {
    render(<BrowseStarships />, { wrapper: Wrapper });

    expect(screen.getAllByRole("button"));
  });
  it("component renders card sceletons before getting data", () => {
    render(<BrowseStarships />, { wrapper: Wrapper });

    expect(screen.getAllByTestId("card-sceleton"));
  });
  it("card sceletons are replaced by starship cards after getting data", async () => {
    render(<BrowseStarships />, { wrapper: Wrapper });

    expect(await screen.findAllByTestId("card"));
    expect(screen.queryAllByTestId("card-sceleton").length).toBe(0);
  });
  it("component start with page 1 as default", () => {
    render(<BrowseStarships />, { wrapper: Wrapper });

    expect(screen.getAllByText(/page: 1/i));
  });
  it("user can go to the next and previous pages", async () => {
    const user = userEvent.setup();
    render(<BrowseStarships />, { wrapper: Wrapper });

    const nextButtons = screen.getAllByLabelText("next page");
    await user.click(nextButtons[0]);
    await waitFor(() => expect(screen.findAllByText(/page: 2/i)));
    const prevButtons = screen.getAllByLabelText("previous page");
    await user.click(prevButtons[0]);
    await waitFor(() => expect(screen.findAllByText(/page: 1/i)));
  });
  it("user can't go to the pages that doesnt exist", async () => {
    //server mock provides only 1 and 2 page reesponses
    const user = userEvent.setup();
    render(<BrowseStarships />, { wrapper: Wrapper });

    const prevButtons = screen.getAllByLabelText("previous page");
    const nextButtons = screen.getAllByLabelText("next page");
    prevButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
    await user.click(nextButtons[0]);
    nextButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});
