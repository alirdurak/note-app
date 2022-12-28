import React from 'react'
import {useSelector, useDsipatch} from "react-redux";
import notesArray from "../notes"


function List() {
  const notes = useSelector((state) => state.note.notes);
  return (
    <div>
      <ul className='flex p-4 '>
    {notes.map((i) => { 
    return (
      
      <li className='m-4 border-1' key={i.id}>
        <span>{i.header}</span>
        
      </li>
   
    )
    })}
    </ul>
    
      
    </div>
  )
}

export default List
