import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    cartIsVisible: false,
    notification: null
  };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
        }
    }
});

// export authSlice actions
export const uiActions = uiSlice.actions;

// export the reducer
export default uiSlice.reducer;