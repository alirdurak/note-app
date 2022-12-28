import React from 'react'
import {useSelector, useDsipatch} from "react-redux";
import notesArray from "../notes"


function List() {
  const notes = useSelector((state) => state.note.notes);
  return (
    <div>
      <ul>
    {notes.map((i) => { 
    return (
      
      <li key={i.id}>
        <span>{i.header}</span>
        
      </li>
   
    )
    })}
    </ul>
    
      
    </div>
  )
}

export default List
