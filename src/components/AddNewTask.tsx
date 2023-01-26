import React, { useEffect, useId, useState } from "react";
import useTaskStore from "../stores/useTaskStore";
import { z } from "Zod";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as R2d2Icon } from "../assets/icons/r2d2Icon.svg";

function AddNewTask() {
  const [newTask, setNewTask] = useState("");
  const [validatedTask, setValidatedTask] = useState<null | string>(null);
  const { addTask } = useTaskStore();
  const taskSchema = z.string().trim().min(1);

  useEffect(() => {
    try {
      setValidatedTask(taskSchema.parse(newTask));
    } catch {
      setValidatedTask(null);
    }
  }, [newTask]);

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validatedTask) {
      addTask({
        id: uuidv4(),
        date: new Date(),
        value: validatedTask,
      });
      setNewTask("");
    }
  }

  return (
    <form
      autoComplete="off"
      className="my-5"
      onSubmit={submitHandler}
      aria-label="add new task"
    >
      <label htmlFor="inputId" className="mb-2 block text-sm opacity-50">
        new task:
      </label>
      <div className="flex card p-2 rounded-sm">
        <input
          className="card-text-important bg-transparent w-full focus:outline-none mr-2"
          type="text"
          name="newTask"
          id={useId()}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          aria-label="submit"
          disabled={!validatedTask}
          className="disabled:opacity-0 duration-200"
        >
          <R2d2Icon className="h-8 fill-blue-200/90" />
        </button>
      </div>
    </form>
  );
}

export default AddNewTask;
