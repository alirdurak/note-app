import React, {useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ColorPicker from './ColorPicker';
import Buttons from './Buttons';
import { useDispatch } from 'react-redux';
import { headerChangeMethod, textChangeMethod } from '../redux/slices/noteSlice';


function TextArea() {
  const [headerChanger, setHeaderChanger] = useState("")
  const [textChanger, setTextChanger] = useState("")
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(headerChangeMethod(headerChanger))},
  [headerChanger])

  useEffect(()=>{ dispatch(textChangeMethod(textChanger))},
  [textChanger])

    const headerValue =  (e)=>{
       setHeaderChanger(e.target.value)
      
    }
    const textValue = (e)=>{
      setTextChanger(e.target.value)
     
    }
  return (
    <div>
     <Box sx={{
      width: 600,
      display:"flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "center",
      marginTop: 6 , 
      
     }} >
      <Box 
      className="flex justify-between content-end p-0 container "
      >
      <TextField  required  value={headerChanger} onChange={headerValue}  label="Header" className='w-40 '  />
      <ColorPicker  />
      </Box>
     <TextField value={textChanger} onChange={textValue}  variant="outlined" multiline minRows={8} placeholder="Write your note..." fullWidth   >
     </TextField>
     <Box className="justify-self-start flex self-end mt-2"  >
     <Buttons setHeaderChanger={setHeaderChanger} setTextChanger={setTextChanger}  />
     </Box>
     
     
     </Box>
    </div>
  )
}

export default TextArea
