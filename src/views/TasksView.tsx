import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ReactComponent as C3poIcon } from "../assets/icons/c3poIcon.svg";
import TaskApp from "../components/TaskApp";

function TasksView() {
  return (
    <>
      <Helmet>
        <title>Tasks - Star App</title>
        <meta name="description" content="Star Wars themed to do app" />
      </Helmet>
      <motion.div
        className="my-20"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-end">
          <C3poIcon className="fill-yellow-600 w-16 min-[400px]:w-20 mr-2 shrink-0" />
          <div>
            <p className="opacity-50 text-sm min-[450px]:text-base">C-3PO</p>
            <h1 className="min-[400px]:text-xl sm:text-2xl">
              WHAT TASK WOULD YOU LIKE ME TO ADD?
            </h1>
          </div>
        </div>
        <TaskApp />
      </motion.div>
    </>
  );
}

export default TasksView;
