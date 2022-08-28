import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name: 'Hau mentor', content: 'hello 123'},
        {name: 'Quan mentor', content: 'hello 456'}
    ]
}

const FaceBookReducer = createSlice({
  name: 'FaceBookReducer',
  initialState,
  reducers: {
    addComment: (state,action) => {
        let userComment = action.payload;
        state.arrComment.push(userComment);
    }
  }
});

export const {addComment} = FaceBookReducer.actions

export default FaceBookReducer.reducer