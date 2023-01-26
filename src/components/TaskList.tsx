import React, { useRef, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import useTaskStore from "../stores/useTaskStore";
import TaskItem from "./TaskItem";

function TaskList() {
  const [sortBy, setSortBy] = useState<"NEWEST" | "OLDEST">("NEWEST");
  const { tasks, fromNewest, fromOldest } = useTaskStore();
  const itemRefs = useRef<HTMLLIElement[]>([]);
  function getSortedTasks() {
    switch (sortBy) {
      case "NEWEST":
        return fromNewest();

      case "OLDEST":
        return fromOldest();

      default:
        return tasks;
    }
  }
  return (
    <div>
      <h2 className="text-2xl text-yellow-500">TASKS TO DO: {tasks.length}</h2>
      <div className="flex items-end">
        <p className="mr-5 opacity-50 text-sm">sort by:</p>
        <button
          onClick={() => {
            setSortBy("NEWEST");
          }}
          className={"mr-5 duration-200"}
          style={{ opacity: sortBy === "NEWEST" ? 1 : 0.5 }}
        >
          NEWEST
        </button>
        <button
          onClick={() => {
            setSortBy("OLDEST");
          }}
          className={"mr-5 opacity-50 duration-200"}
          style={{ opacity: sortBy === "OLDEST" ? 1 : 0.5 }}
        >
          OLDEST
        </button>
      </div>
      <ul className="mt-5 space-y-5 relative">
        <AnimatePresence mode="popLayout">
          {getSortedTasks().map((task, index) => (
            <TaskItem
              task={task}
              key={task.id}
              ref={(el) => {
                itemRefs.current[index] = el as HTMLLIElement;
              }}
            />
          ))}
          {!tasks.length && (
            <motion.li
              className="card card-shape w-full"
              layout
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
              <h3 className="card-text-important">
                Congratulations, you have nothing to do!
              </h3>
              <p className="text-sm">Take some rest.</p>
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default TaskList;
