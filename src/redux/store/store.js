import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'

//const { default: logger } = require('redux-logger')
import userReducer from "../features/CurrentUser"

const store = configureStore({
    reducer:{
        user:userReducer,
    },
    //middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store