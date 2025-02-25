import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import complaint from "./complaint/complaintSlice";
import comment from "./comment/commentSlice";

const store = configureStore({
  reducer: { auth, complaint, comment },
});

export default store;
