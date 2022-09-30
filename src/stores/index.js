import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import todo from "./todo";
import modal from "./modal"
import theme from "./theme";
import language from "./language";

const store = configureStore({
    reducer: {
        todo,
        auth,
        modal,
        theme,
        language
    }
})

export default store;