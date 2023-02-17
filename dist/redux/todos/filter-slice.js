"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtersReducer = exports.updateFilter = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const todos_constants_1 = require("./todos-constants");
const initialState = {
    status: todos_constants_1.STATUS.ALL,
};
const filtersSlice = (0, toolkit_1.createSlice)({
    name: "filters",
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            state.status = action.payload;
        },
    },
});
exports.updateFilter = filtersSlice.actions.updateFilter;
exports.filtersReducer = filtersSlice.reducer;
//# sourceMappingURL=filter-slice.js.map