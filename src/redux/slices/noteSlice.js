import {createSlice} from '@reduxjs/toolkit'
import notesArray from "../../notes"

export const noteSlice = createSlice({
    name: "note",
    initialState:{
        notes: notesArray,
        color: "",
        header: "",
        text: "",
        

    },
    reducers:{
        searchMethod: (state,action) => {
            const filtered = notesArray.filter((item) =>{
                return Object.keys(item).some((key) => {
                    return item[key].toString().toLowerCase().includes(action.payload.toLocaleLowerCase())
                } )
            }  ); 

           
         state.notes = filtered
   
            
        }

        
    },
});
export const {searchMethod} = noteSlice.actions;
export default noteSlice.reducer;