import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: null,
    status: 'idle',
};



export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logaut: (state) => {
            state.user = null;
        }
    },
   
});

export const { login, logaut } = userSlice.actions;


export const selectUser = (state) => state.user.user;



export default userSlice.reducer;