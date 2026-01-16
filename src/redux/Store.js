import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";
const Store = configureStore({
  reducer: {
    search: searchReducer,
    collection: collectionReducer,
  },
});
export default Store;
