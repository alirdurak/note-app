import {createSlice,nanoid} from '@reduxjs/toolkit'
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
               },
        headerChangeMethod: (state, action) => {
            state.header = action.payload
           
        },
          textChangeMethod: (state,action) => {
            state.text = action.payload
          },
          colorChangeMethod: (state, action) => {
            state.color = action.payload
            console.log(state.color)
          },
          addNewNote: (state) => {
          state.notes.push({
            header: state.header,
            note: state.text,
            color: state.color,
            id: nanoid(),   
          })
          }            


        
    },
});
export const {searchMethod,headerChangeMethod,textChangeMethod,colorChangeMethod,addNewNote} = noteSlice.actions;
export default noteSlice.reducer;