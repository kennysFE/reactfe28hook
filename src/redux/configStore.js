import { configureStore } from "@reduxjs/toolkit";
import FaceBookReducer from "./Reducer/FaceBookReducer";
import NumberReducer from "./Reducer/NumberReducer";

export const store = configureStore({
    reducer: {
        number : NumberReducer,
        FaceBookReducer: FaceBookReducer
    }
})