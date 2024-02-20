import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./slices/playlistSlice";



const store = configureStore({
    reducer: {
        playlistReducer: playlistSlice
    }
})

export default store