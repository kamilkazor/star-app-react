import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import AddNewTask from "../AddNewTask";

describe("AddNewTask", async () => {
  it("renders properly", () => {
    render(<AddNewTask />);

    expect(screen.getByRole("textbox"));
    expect(screen.getByRole("button"));
  });
  it("user can type inside input", async () => {
    const user = userEvent.setup();
    render(<AddNewTask />);

    const input = screen.getByRole("textbox");
    await user.type(input, "testing");
    expect(input).toHaveValue("testing");
  });
  it("user can only submit valid text", async () => {
    const user = userEvent.setup();
    render(<AddNewTask />);

    const form = screen.getByLabelText("add new task");
    const onSubmit = vi.fn();
    form.onsubmit = onSubmit;

    const submitBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    expect(submitBtn).toBeDisabled();
    await user.type(input, "    ");
    expect(submitBtn).toBeDisabled();
    await user.type(input, "testing");
    expect(submitBtn).not.toBeDisabled();
    await user.click(submitBtn);
    expect(onSubmit).toBeCalled();
  });
  it("input value is set to empty after submit", async () => {
    const user = userEvent.setup();
    render(<AddNewTask />);

    const submitBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    await user.type(input, "testing");
    await user.click(submitBtn);
    expect(input).toHaveValue("");
  });
});
