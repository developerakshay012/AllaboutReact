import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./Slices/CounterSlice";


export const store = configureStore({
    reducer:{
        counter : CounterSlice.reducer
    },
})













// In Redux, a reducer is a pure function that determines how the application's state should change in response to a dispatched action.
// It takes the current state and an action as inputs, and returns a new state without mutating the existing one.
// For example, in a counter slice, the reducer defines how the count should increment, decrement, or reset based on specific action types.

// Key points recruiter ke liye mention karna:

// Pure function hai (same input → same output, no side effects).

// Takes state + action → returns new state.

// Immutable update karta hai (state ko directly change nahi karta).

// Application state ka central control deta hai.