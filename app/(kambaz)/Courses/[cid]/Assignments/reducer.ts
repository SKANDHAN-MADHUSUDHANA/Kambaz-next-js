/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";


interface AssignmentsState {
  assignments: any[];
}

const initialState: AssignmentsState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    setAssignments: (state, action) => {
      state.assignments = action.payload || []; // always an array
    },

 
    addAssignment: (state, { payload }) => {
      state.assignments.push(payload);
    },

    deleteAssignmentLocal: (state, { payload: id }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== id);
    },

    updateAssignmentLocal: (state, { payload }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === payload._id ? payload : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignmentLocal,
  updateAssignmentLocal,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
