import { createSlice } from "@reduxjs/toolkit";

const playlistFromStorage = JSON.parse(localStorage.getItem('playlist')) || [];

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: playlistFromStorage,
    reducers: {
        addToPlaylist: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('playlist', JSON.stringify(state));
        },
        removeFromPlaylist: (state, action) => {
            const id = action.payload;
            const updatedState = state.filter(item => item._id !== id);
            localStorage.setItem('playlist', JSON.stringify(updatedState));
            return updatedState;
        }
    }
})

export const { addToPlaylist, removeFromPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
