import Dialog from '@mui/material/Dialog';
import React from 'react';
import './button.css';



const emails = ['username@gmail.com', 'user02@gmail.com'];



export default function SimpleDialog(props: any) {
  const { setOpen, selectedValue, open } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const AddTask = (e: any) => {
    console.log(e.target.TASK_ID.value)
    debugger
    fetch("https://localhost:7079/create-Task", {

      method: "POST",

      body: JSON.stringify({
        tId: e.target.TASK_ID.value,
        pId: e.target.Project_ID.value,
        assignTo: e.target.assignto.value,
        taskDetails: e.target.TASK_Detail_ID.value,
        taskStatusId: e.target.TASK_STATUS_ID.value,
        assignBy: e.target.ASSIGNED_BY.value
      }),

      headers: {

        "Content-type": "application/json; charset=UTF-8"

      }

    })
      .then(response => handleClose)
      .then(data => console.log(data));

  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className='container'>
        <form onSubmit={AddTask}>
          <div className="row">
            <div className="col-25">
              <label hidden>Task Id</label>
            </div>
            <div className="col-75">
              <input name='TASK_ID' value={0} type="text" hidden />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label >Project Id</label>
            </div>
            <div className="col-75">
              <input name='Project_ID' placeholder='Type Project ID...' type="text"  required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label >Task Details</label>
            </div>
            <div className="col-75">
              <input name='TASK_Detail_ID' placeholder='Task Detail...' type="text" required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Assign To</label>
            </div>
            <div className="col-75">
              <input name='assignto' placeholder='Type Assign To...' type="text" required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label >Status Id</label>
            </div>
            <div className="col-75">
              <input name='TASK_STATUS_ID' placeholder='Task Status Id...' type="text" required/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Assign By</label>
            </div>
            <div className="col-75">
              <input name='ASSIGNED_BY' placeholder='Assign By...' type="text" required/>
            </div>
          </div>
          <div>
            <button className='Task_Button' type='submit'>ADD TASK</button>
          </div>
        </form>
      </div>


    </Dialog>
  );
}


