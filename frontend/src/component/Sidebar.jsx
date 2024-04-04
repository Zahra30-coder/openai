// Sidebar.js
import React from 'react';

function Sidebar({clearState}) {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px', height: '100vh'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Chat Threads</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        Conversation 1
                    </a>
                </li>
                {/* Repeat for other conversations */}
                <li>
                    <a href="#" className="nav-link link-dark">
                        Conversation 2
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-dark">
                        Conversation 3
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Settings</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    {/* Settings options */}
                    <li><a className="dropdown-item" href="#" onClick={()=>clearState(1)} >New conversation</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
