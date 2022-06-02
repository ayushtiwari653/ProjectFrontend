
import React, { useState } from 'react';
import Delete from './Delete'
import AddCardButton from './AddCardButton';

function HeaderButton() {
  const [open, setOpen] = useState<boolean>(false)
  const [openn, setOpenn] = useState<boolean>(false)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  fs-6">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" >
              <a className="nav-link" href="/Dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Logout</a>
            </li>
            <li className="nav-item">
            <a className="nav-link"  onClick={() => setOpenn(true)}>
                Add Task
              </a>
              <AddCardButton open={openn} setOpen={setOpenn}></AddCardButton>
            </li>
            <li className="nav-item">
            <a className="nav-link" type="button" onClick={() => setOpen(true)}>
                Delete
              </a>
              <Delete open={open} setOpen={setOpen}></Delete>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ExportExcel">Excel Sheet</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default HeaderButton