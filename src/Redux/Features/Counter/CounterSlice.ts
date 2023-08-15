import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface countState {
    count: number
}

const initialState: countState = {
    count : 0
}



const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count -1
        },
        incrementByAmount: (state, action: PayloadAction<number>) =>{
           state.count = state.count + action.payload 
        }
    }
})


export const {increment, decrement, incrementByAmount} = CounterSlice.actions
export default CounterSlice.reducer
