// rxslice
import { createSlice } from '@reduxjs/toolkit'
// state default
const initialState = 4;



const NumberReducer = createSlice({
  name: 'NumberReducer',
  initialState,
  reducers: {
    changeNumber:(state, action) => {
        state = action.payload;
        return state;
    }
  }
});

export const {changeNumber} = NumberReducer.actions

export default NumberReducer.reducer