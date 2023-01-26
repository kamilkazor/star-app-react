import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Task } from "../../stores/useTaskStore";

import TaskItem from "../TaskItem";

describe("TaskItem", async () => {
  const task: Task = {
    id: "testId",
    date: new Date(),
    value: "testing value",
  };

  it("renders properly", () => {
    render(<TaskItem task={task} />);
    expect(screen.getByRole("button"));
    expect(screen.getByText(task.value));
  });
});
