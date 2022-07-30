import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    members: [
      {
        id: 1,
        name: "Asraful",
        email: "asraful8625@gmail.com",
      },
      {
        id: 2,
        name: "John",
        email: "john@gmail.com",
      },
      {
        id: 3,
        name: "David",
        email: "david@gmail.com",
      },
    ],
  },
  reducers: {
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMember } = memberSlice.actions;

export default memberSlice.reducer;
