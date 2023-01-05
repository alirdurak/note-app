import {createSlice,nanoid} from '@reduxjs/toolkit'


let notesArray = JSON.parse(localStorage.getItem("notes"))
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
            
          },
          addNewNote: (state) => { 
         let a = []
         a=(JSON.parse(localStorage.getItem("notes"))) || []
         a.push( {header: state.header,
            note: state.text,
            color: state.color,
            id: nanoid(),   })
            localStorage.setItem("notes", JSON.stringify(a))
            state.notes = a
          },
          deleteMethod: (state,action) => {
            let b = []
            b = state.notes 
            const filtered = b.filter((i) => {
             return i.id !== action.payload
            })
            localStorage.setItem("notes",JSON.stringify(filtered))
            state.notes = filtered
          },            


        
    },
});
export const {searchMethod,headerChangeMethod,textChangeMethod,colorChangeMethod,addNewNote,deleteMethod} = noteSlice.actions;
export default noteSlice.reducer;