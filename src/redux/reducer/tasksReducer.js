import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: 1,
        title: "Add member",
        description: "Test task 01",
        member_id: 1,
        created_at: "Saturday, July 28th, 2022, 5:46:21 PM",
      },
      {
        id: 2,
        title: "Add task",
        description: "Test task 02",
        member_id: 1,
        created_at: "Saturday, July 29th, 2022, 5:46:21 PM",
      },
      {
        id: 3,
        title: "Implement Redux",
        description: "Test task 03",
        member_id: 2,
        created_at: "Saturday, July 29th, 2022, 5:46:21 PM",
      },
      {
        id: 4,
        title: "Clean garden",
        description: "Test task 04",
        member_id: 2,
        created_at: "Saturday, July 30th, 2022, 5:46:21 PM",
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
