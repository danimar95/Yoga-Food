import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users.js";

const store  = configureStore({
  reducer: { 
    users 
  },
})
export default store;