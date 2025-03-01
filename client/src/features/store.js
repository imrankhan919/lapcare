import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import complaint from "./complaint/complaintSlice";
import comment from "./comment/commentSlice";
import admin from "./admin/adminSlice";

const store = configureStore({
  reducer: { auth, complaint, comment, admin },
});

export default store;
