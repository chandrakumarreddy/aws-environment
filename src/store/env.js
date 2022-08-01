import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  environmentsList: [],
  environmentsData: {},
  edit: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    setEnvironmentsData: (state, action) => {
      const id = state.environmentsList.length + 1;
      state.environmentsList.push({
        name: action.payload.name,
        id,
      });
      state.environmentsData[id] = Object.assign(action.payload.data, { id });
    },
    updateEnvironment: (state, action) => {
      state.environmentsData[action.payload.data.name] = {
        ...state.environmentsData[action.payload.data.name],
        ...action.payload.data,
      };
      const index = state.environmentsList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.environmentsList[index].name !== action.payload.data.name) {
        state.environmentsList = [
          ...state.environmentsList.slice(0, index),
          { id: action.payload.id, name: action.payload.data.name },
          ...state.environmentsList.slice(index + 1),
        ];
      }
    },
    deleteItem: (state, action) => {
      delete state.environmentsData[action.payload.id];
      state.environmentsList = state.environmentsList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setEdit, setEnvironmentsData, updateEnvironment, deleteItem } =
  counterSlice.actions;

export default counterSlice.reducer;
