import { color, padding, style } from '@mui/system';
import React, { useState } from 'react';
import './button.css';
import Delete from './Delete'



export default function DeleteButton() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <div>
        <button  type="button" className='btn btn-primary btn-sm' onClick={() => setOpen(true)}>
          Delete
        </button>
        <Delete open={open} setOpen={setOpen}></Delete>
      </div>
      </div>
      
  )
}























