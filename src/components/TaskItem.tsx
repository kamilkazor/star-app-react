import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as DeleteIcon } from "../assets/icons/deleteIcon.svg";
import useTaskStore, { Task } from "../stores/useTaskStore";

interface Props {
  task: Task;
}

// function TaskItem({ task }: Props) {
const TaskItem = React.forwardRef<HTMLLIElement, Props>(({ task }, ref) => {
  const { deleteTask } = useTaskStore();
  return (
    <motion.li
      ref={ref}
      layout
      className="card card-shape flex w-full"
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
    >
      <div className="mr-5">
        <p className="text-sm [word-spacing:0.5rem]">
          {task.date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
        <h3 className="card-text-important [word-break:break-word]">
          {task.value}
        </h3>
      </div>
      <button
        aria-label="delete task"
        onClick={() => {
          deleteTask(task.id);
        }}
        className="ml-auto fill-blue-300/50 duration-200 flex items-center"
      >
        <DeleteIcon className="h-10" />
      </button>
    </motion.li>
  );
});

export default TaskItem;
