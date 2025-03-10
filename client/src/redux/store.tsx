import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./feature/counterSlice.tsx";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
