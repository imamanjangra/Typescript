import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  task: string;
  isCompeleted: boolean;
}

interface EditTask {
  id: number;
  updateTask: string;
  isCompeleted ?: boolean;
}

interface todoState {
  tasks: Task[];
}

const initialState: todoState = {
  tasks: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    editTask(state, action: PayloadAction<EditTask>) {
      const updatetask = state.tasks.find(
        (item) => item.id === action.payload.id,
      );
      if (updatetask) {
        updatetask.task = action.payload.updateTask;
      }
    },

   isCompeletedToggle(state, action: PayloadAction<number>) {

    const task = state.tasks.find(
        (item) => item.id === action.payload
    );

    if(task){
        task.isCompeleted = !task.isCompeleted;
    }

},
  },
});


export const {
    addTask,
    deleteTask,
    editTask,
    isCompeletedToggle
} = TodoSlice.actions

export default TodoSlice.reducer