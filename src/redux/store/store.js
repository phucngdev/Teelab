import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "../useSlice/useSlice";
import bannerSlice from "../useSlice/bannerSlice";

const store = configureStore({
  reducer: {
    crud: crudSlice,
    banner: bannerSlice,
  },
});
export default store;
