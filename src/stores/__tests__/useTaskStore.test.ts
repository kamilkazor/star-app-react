import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import useTaskStore from "../useTaskStore";

describe("useTaskStore", () => {
  beforeEach(() => {
    useTaskStore.setState({ tasks: [] });
  });
  const testTaskFirst = {
    date: new Date("2023-01-25T15:00"),
    id: uuidv4(),
    value: "Test value",
  };
  const testTaskSecond = {
    date: new Date("2023-01-26T12:00"),
    id: uuidv4(),
    value: "Test value",
  };
  const testTaskThird = {
    date: new Date("2023-01-26T18:00"),
    id: uuidv4(),
    value: "Test value",
  };

  it("adds new task", () => {
    const { result } = renderHook(() => useTaskStore());

    expect(result.current.tasks.length).toBe(0);
    act(() => {
      result.current.addTask(testTaskFirst);
    });
    expect(result.current.tasks[0]).toEqual(testTaskFirst);
  });
  it("deletes task by id", () => {
    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.addTask(testTaskFirst);
    });
    act(() => {
      result.current.addTask(testTaskSecond);
    });
    act(() => {
      result.current.addTask(testTaskThird);
    });

    expect(
      result.current.tasks.filter((task) => task.id === testTaskSecond.id)
        .length
    ).toBe(1);
    act(() => {
      result.current.deleteTask(testTaskSecond.id);
    });
    expect(
      result.current.tasks.filter((task) => task.id === testTaskSecond.id)
        .length
    ).toBe(0);
  });
  it("returns sorted tasks by newest", async () => {
    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.addTask(testTaskSecond);
    });
    act(() => {
      result.current.addTask(testTaskThird);
    });
    act(() => {
      result.current.addTask(testTaskFirst);
    });

    const fromNewest = await act(() => result.current.fromNewest());
    expect(fromNewest[0]).toEqual(testTaskThird);
    expect(fromNewest[1]).toEqual(testTaskSecond);
    expect(fromNewest[2]).toEqual(testTaskFirst);
  });
  it("returns sorted tasks by oldest", async () => {
    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.addTask(testTaskSecond);
    });
    act(() => {
      result.current.addTask(testTaskThird);
    });
    act(() => {
      result.current.addTask(testTaskFirst);
    });

    const fromNewest = await act(() => result.current.fromOldest());
    expect(fromNewest[0]).toEqual(testTaskFirst);
    expect(fromNewest[1]).toEqual(testTaskSecond);
    expect(fromNewest[2]).toEqual(testTaskThird);
  });
});
