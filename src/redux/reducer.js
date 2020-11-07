import { createSlice } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'

// reducer
// import userReducer from './userSlice'

// export default combineReducers({
//     userReducer,
// })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: 'zaime',
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.user = null;
        }
    }
})

export default userSlice.reducer
export const { loginSuccess, logoutSuccess } = userSlice.actions