import { configureStore } from "@reduxjs/toolkit";

import favData from "./modules/favorites/reducer";
import userData from "./modules/user/reducer";

const store = configureStore({
  reducer: {
    favorite: favData,
    user: userData,
  },
});

export default store;
