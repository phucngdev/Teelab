import { configureStore } from "@reduxjs/toolkit";
import useSlice from "../useSlice/useSlice";

const store = configureStore({
  reducer: {
    crud: useSlice,
  },
});
export default store;
