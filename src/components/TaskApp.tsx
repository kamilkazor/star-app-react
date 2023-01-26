import React from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";

function TaskApp() {
  return (
    <div>
      <AddNewTask />
      <TaskList />
    </div>
  );
}

export default TaskApp;
