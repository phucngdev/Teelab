import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../api/axios";

// hàm lấy dữ liệu
export const findAllBanner = createAsyncThunk("findAllBanner", async () => {
  try {
    // gọi api lấy dữ liệu
    const response = await baseUrl.get("banner.json");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// hàm xóa 1 bản ghi theo id
export const removeBanner = createAsyncThunk(
  "removeBanner",
  async ({ key }) => {
    try {
      let response = await baseUrl.delete(`banner/${key}.json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
