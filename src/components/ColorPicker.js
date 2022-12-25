import React from 'react'
import { FormControl, RadioGroup, Radio, FormControlLabel} from '@mui/material';
import { red,blue,green,yellow,pink } from '@mui/material/colors';

function ColorPicker() {
  return (
    <div>
        <FormControl>
      
      <RadioGroup 
        className='p-0 '         
        row
        name="colorControl"
      >
        <FormControlLabel className='' value="red" control={<Radio sx={{color:red[800], 
        '&.Mui-checked': {
            color: red[600],
          },
        }}/>}  />
        <FormControlLabel className='border-blue-800 rounded-full'  value="blue" control={<Radio sx={{color:blue[800],
        '&.Mui-checked': {
            color: blue [600],
          },
        }} />}  />
        <FormControlLabel className='border-green-800 rounded-full' value="green" control={<Radio sx={{
            color: green[800],'&.Mui-checked': {
                color: green [600],
              },
        }} />}  />
        <FormControlLabel className='border-yellow-800 rounded-full' value="yellow" control={<Radio sx={{
            color:yellow[800],'&.Mui-checked': {
                color: yellow [600],
              },
        }} />} />
        <FormControlLabel className='border-pink-800 rounded-full  ' value="pink" control={<Radio sx={{
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
