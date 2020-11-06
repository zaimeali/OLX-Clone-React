import { configureStore } from '@reduxjs/toolkit'
import { combineReducer } from 'redux'

// reducer
import user from './reducer'

const reducer = combineReducer({
    user,
})

const store = configureStore({
    reducer,
})

export default store