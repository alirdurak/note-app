import React, {useState,useEffect} from 'react'
import { FormControl, RadioGroup, Radio, FormControlLabel} from '@mui/material';
import { red,blue,green,yellow,pink } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { colorChangeMethod } from '../redux/slices/noteSlice';

function ColorPicker() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(colorChangeMethod(color))
  },
  [color])

  const colorValue = (e) =>{
     setColor(e.target.value);
     console.log(color)
  }

  return (
    <div>
        <FormControl>
      
      <RadioGroup 
        className='p-0 '         
        row
        name="colorControl"
        value={color}
        onChange={colorValue}
      >
        <FormControlLabel  className='' value="red" control={<Radio name="colorControl" value="red"    sx={{color:red[800], 
        '&.Mui-checked': {
            color: red[600],
          },
        }}/>}  />
        <FormControlLabel  className='border-blue-800 rounded-full'  value="blue" control={<Radio name="colorControl" value="blue"    sx={{color:blue[800],
        '&.Mui-checked': {
            color: blue[600],
          },
        }} />}  />
        <FormControlLabel className='border-green-800 rounded-full' value="green" control={<Radio name="colorControl" value="green"   sx={{
            color: green[800],'&.Mui-checked': {
                color: green [600],
              },
        }} />}  />
        <FormControlLabel className='border-yellow-800 rounded-full' value="yellow" control={<Radio name="colorControl" value="yellow"  sx={{
            color:yellow[800],'&.Mui-checked': {
                color: yellow [600],
              },
        }} />} />
        <FormControlLabel className='border-pink-800 rounded-full  ' value="pink" control={<Radio name="colorControl" value="pink"   sx={{
            color:pink[800],'&.Mui-checked': {
                color: pink [600],
              },
            
        }} />}  />
      </RadioGroup>
    </FormControl>
      
    </div>
  )
}

export default ColorPicker
