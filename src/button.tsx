import { color, padding, style } from '@mui/system';
import React, { useState } from 'react';
import './button.css';
import AddCardButton from './AddCardButton';

export default function Button() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <div>
        <button  type="button" className='btn btn-primary btn-sm' onClick={() => setOpen(true)}>
          ADD TASK
        </button>
        <AddCardButton open={open} setOpen={setOpen}></AddCardButton>
      </div>
      <div>
      </div>
      </div>

  )
}























