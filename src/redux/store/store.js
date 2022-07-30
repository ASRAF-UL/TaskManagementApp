import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/loginReducer";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import memberReducer from "../reducer/memberReducer";
import tasksReducer from "../reducer/tasksReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedMemberReducer = persistReducer(persistConfig, memberReducer);

export const store = configureStore({
  reducer: {
    auth: persistedLoginReducer,
    member: memberReducer,
    task: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
