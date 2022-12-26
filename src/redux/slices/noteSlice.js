import {createSlice} from '@reduxjs/toolkit'
import notes from "../../notes"

export const noteSlice = createSlice({
    name: "note",
    initialState:{
        note: notes,
    },
    reducers:{
        
    },
});
export const {} = noteSlice.actions;
export default noteSlice.reducer;