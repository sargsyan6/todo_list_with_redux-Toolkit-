import { configureStore } from "@reduxjs/toolkit";
import todo from "../feature/slice";

const store = configureStore({
    reducer:{
        todo:todo,

    }
})

export default store