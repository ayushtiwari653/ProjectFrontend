import React from 'react';
function Loginheader() {

    return(
        <nav className="bg-dark navbar-dark navbar ">
            <div className="row col-12 d-flex justify-content-between text-white">
                <a></a>
                <h3>Login to Kanban Board</h3>
                <a className='btn btn-primary' href="/Registration">Register</a>
            </div>
        </nav>
    )
}

export default Loginheader;