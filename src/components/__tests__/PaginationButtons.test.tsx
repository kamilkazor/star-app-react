import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PaginationButtons from "../PaginationButtons";

describe("PaginationButtons", async () => {
  it("renders properly", () => {
    render(
      <PaginationButtons
        page={5}
        prev={false}
        next={false}
        prevHandler={() => {}}
        nextHandler={() => {}}
      />
    );

    expect(screen.getByLabelText("previous page"));
    expect(screen.getByLabelText("current page"));
    expect(screen.getByLabelText("next page"));
  });
  it("proper page number is displayed", () => {
    render(
      <PaginationButtons
        page={5}
        prev={false}
        next={false}
        prevHandler={() => {}}
        nextHandler={() => {}}
      />
    );

    expect(screen.getByText(/page: 5/));
  });
  it("buttons are dissabled when there is no previous or next page", () => {
    render(
      <PaginationButtons
        page={0}
        prev={false}
        next={false}
        prevHandler={() => {}}
        nextHandler={() => {}}
      />
    );

    const prevBtn = screen.getByLabelText("previous page");
    const nextBtn = screen.getByLabelText("next page");
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeDisabled();
  });
  it("buttons are enabled when there is previous or next page", () => {
    render(
      <PaginationButtons
        page={0}
        prev={true}
        next={true}
        prevHandler={() => {}}
        nextHandler={() => {}}
      />
    );

    const prevBtn = screen.getByLabelText("previous page");
    const nextBtn = screen.getByLabelText("next page");
    expect(prevBtn).not.toBeDisabled();
    expect(nextBtn).not.toBeDisabled();
  });
  it("prevHandler and nextHandler functions are fired after clicking buttons", async () => {
    const user = userEvent.setup();
    const prevHandler = vi.fn();
    const nextHandler = vi.fn();
    render(
      <PaginationButtons
        page={0}
        prev={true}
        next={true}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
    );

    const prevBtn = screen.getByLabelText("previous page");
    const nextBtn = screen.getByLabelText("next page");
    expect(prevHandler).not.toBeCalled();
    await user.click(prevBtn);
    expect(prevHandler).toBeCalled();
    expect(nextHandler).not.toBeCalled();
    await user.click(nextBtn);
    expect(nextHandler).toBeCalled();
  });
});
