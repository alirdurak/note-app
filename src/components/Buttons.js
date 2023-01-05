import React from 'react'
import { useDispatch } from 'react-redux';
import { addNewNote } from '../redux/slices/noteSlice';

function Buttons({setTextchanger, setHeaderChanger}) {
  const dispatch =useDispatch()
  const newNote = (e) => {
    e.preventDefault()
    dispatch(addNewNote())
   
  }
  return (
    <div>
      <form  onSubmit={newNote}>
   
        <button className=' p-1 border border-slate-400/50 rounded-md hover:border-slate-400 hover:bg-slate-200 transition' >Save</button>
        </form>
    
    </div>
  )
}

export default Buttons
