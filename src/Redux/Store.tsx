import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counter/CounterSlice"
import logger from "./Middleware/Logger";





export const store = configureStore({

    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

