import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import todo from "./todo";
import modal from "./modal"

const store = configureStore({
    reducer: {
        todo,
        auth,
        modal
    }
})

export default store;