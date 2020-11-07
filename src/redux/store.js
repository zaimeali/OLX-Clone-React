import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// reducer
import user from './reducer'

const reducer = combineReducers({
    user,
})

// console.log(reducer)

const store = configureStore({
    reducer,
})

export default store