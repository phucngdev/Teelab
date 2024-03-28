import { createSlice } from "@reduxjs/toolkit";
import { removeBanner, findAllBanner } from "../../services/banner.service";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAllBanner.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAllBanner.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
        console.log("state ", state.data);
      })
      .addCase(findAllBanner.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(removeBanner.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(removeBanner.fulfilled, (state, action) => {
        state.status = "Successfully!";
        const updatedData = { ...state.data };
        const dataKeyToRemoveBanner = action.payload;
        delete updatedData[dataKeyToRemoveBanner];
        state.data = updatedData;
      })
      .addCase(removeBanner.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;
