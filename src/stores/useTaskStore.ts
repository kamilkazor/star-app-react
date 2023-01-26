import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export interface Task {
  id: string;
  date: Date;
  value: string;
}

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    date: new Date("Tue Jan 24 2023 11:17:25 GMT+0100"),
    value: "Go to sleep",
  },
  {
    id: uuidv4(),
    date: new Date("Tue Jan 23 2023 15:24:26 GMT+0100"),
    value: "Visit master Yoda",
  },
  {
    id: uuidv4(),
    date: new Date("Tue Jan 22 2023 09:11:30 GMT+0100"),
    value: "Repair the starship",
  },
];

interface TaskStoreState {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (task: Task["id"]) => void;
  fromNewest: () => Task[];
  fromOldest: () => Task[];
}

const useTaskStore = create<TaskStoreState>()((set, get) => ({
  tasks: initialTasks,
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  deleteTask: (id: Task["id"]) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  fromNewest: () =>
    [...get().tasks].sort((a, b) => b.date.getTime() - a.date.getTime()),
  fromOldest: () =>
    [...get().tasks].sort((a, b) => a.date.getTime() - b.date.getTime()),
}));

export default useTaskStore;
