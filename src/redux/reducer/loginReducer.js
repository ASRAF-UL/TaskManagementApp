import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    count: 100,
    users: [
      {
        id: 1,
        username: "test01",
        password: "test1234",
      },
    ],
    loggedInUser: null,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    login: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, login } =
  loginSlice.actions;

export default loginSlice.reducer;
