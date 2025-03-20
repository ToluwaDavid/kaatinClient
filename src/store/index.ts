import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cardReducer from "./slices/cardSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
