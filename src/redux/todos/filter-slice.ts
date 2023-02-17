import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "./todos-constants";

interface IFilterState {
  status: STATUS;
}

const initialState: IFilterState = {
  status: STATUS.ALL,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<STATUS>) => {
      state.status = action.payload;
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
