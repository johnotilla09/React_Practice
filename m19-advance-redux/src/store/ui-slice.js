import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
    cartIsVisible: false
  };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

// export authSlice actions
export const uiActions = uiSlice.actions;

// export the reducer
export default uiSlice.reducer;