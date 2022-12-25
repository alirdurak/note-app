import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Buttons() {
  return (
    <div>
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        <Button className='bg-red'>Save</Button>
        <Button>Delete</Button>
    </ButtonGroup>
    </div>
  )
}

export default Buttons
