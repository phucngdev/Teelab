import { createSlice } from "@reduxjs/toolkit";
import {
  findOneData,
  removeData,
  findAllData,
  createData,
  upDateData,
} from "../../services/crud.service";

const postSlice = createSlice({
  name: "crud",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    dataEdit: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAllData.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAllData.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(findAllData.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(removeData.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(removeData.fulfilled, (state, action) => {
        state.status = "Successfully!";
        const updatedData = { ...state.data };
        const dataKeyToRemove = action.payload;
        delete updatedData[dataKeyToRemove];
        state.data = updatedData;
      })
      .addCase(removeData.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(findOneData.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findOneData.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.dataEdit = action.payload;
      })
      .addCase(findOneData.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(createData.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data.unshift(action.payload);
      })
      .addCase(createData.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(upDateData.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(upDateData.fulfilled, (state, action) => {
        state.status = "Success";
      })
      .addCase(upDateData.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
