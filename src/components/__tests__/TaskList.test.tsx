import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import TaskList from "../TaskList";

describe("TaskList", async () => {
  it("renders properly", () => {
    render(<TaskList />);

    expect(screen.getByText(/Tasks to do/i));
    expect(screen.getByText(/newest/i));
    expect(screen.getByText(/oldest/i));
  });
});
