import React from 'react'
import { useDispatch } from 'react-redux';
import { addNewNote } from '../redux/slices/noteSlice';

function Buttons() {
  const dispatch =useDispatch()
  const newNote = () => {
    dispatch(addNewNote())
    console.log("click")
  }
  return (
    <div>
   
        <button onClick={newNote}>save</button>
    
    </div>
  )
}

export default Buttons
