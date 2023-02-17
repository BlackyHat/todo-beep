import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const createAppAsyncThunk = createAsyncThunk.withTypes<{
//   state: RootState;
//   dispatch: AppDispatch;
//   rejectValue: string;
//   extra: { s: string; n: number };
// }>();
