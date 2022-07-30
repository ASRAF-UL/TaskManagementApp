import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: 1,
        title: "Add member",
        description: "Test task 01",
        member: {
          id: 1,
          name: "Asraful",
          email: "asraful8625@gmail.com",
        },
        created_at: "Saturday, July 28th, 2022, 5:46:21 PM",
      },
      {
        id: 2,
        title: "Add task",
        description: "Test task 02",
        member: {
          id: 1,
          name: "Asraful",
          email: "asraful8625@gmail.com",
        },
        created_at: "Saturday, July 29th, 2022, 5:46:21 PM",
      },
      {
        id: 3,
        title: "Implement Redux",
        description: "Test task 03",
        member: {
          id: 2,
          name: "John",
          email: "john@gmail.com",
        },
        created_at: "Saturday, July 29th, 2022, 5:46:21 PM",
      },
      {
        id: 4,
        title: "Clean garden",
        description: "Test task 04",
        member: {
          id: 3,
          name: "David",
          email: "david@gmail.com",
        },
        created_at: "Saturday, July 30th, 2022, 5:46:21 PM",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.id = action.payload.id;
          task.title = action.payload.title;
          task.description = action.payload.description;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
