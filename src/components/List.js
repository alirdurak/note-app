import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { deleteMethod } from '../redux/slices/noteSlice';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import { grey } from '@mui/material/colors';




function List() {
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMethod(id))
  }

  return (
    <div className='mt-8'>
     
    { notes.map((i) => { 
    return (
      <div className='flex'>
     
      <Accordion sx={{
        width: "50rem",
        display: "flex",

        
      }}>
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{i.header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
      {i.note}
        </Typography>
      </AccordionDetails>
    </Accordion>
   <button onClick={()=>handleDelete(i.id)} >
   <ClearIcon sx={{
      color: grey[500],
      cursor: "pointer",
      
    }}  />  
   </button>
    </div>
   
    )
    })}
    
      
    </div>
  )
}

export default List
