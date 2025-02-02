import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import storyReducer from "./storySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    story: storyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
