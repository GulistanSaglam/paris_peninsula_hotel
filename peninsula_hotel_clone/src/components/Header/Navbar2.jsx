import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar2() {
  return (
    <nav>
        <div>
            <ul className='navbar2-list'>
                <li>
                    <NavLink to="/roomsuits" style={{ textDecoration: 'none' }}>
                    <p>ROOMS & SUITES</p> 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dinning" style={{ textDecoration: 'none' }}>
                     <p>DINNING</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wellness" style={{ textDecoration: 'none' }}>
                     <p>WELLNESS</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/offers" style={{ textDecoration: 'none' }}>
                     <p>OFFERS</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/academy" style={{ textDecoration: 'none' }}>
                     <p>ACADEMY</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/evets" style={{ textDecoration: 'none' }}>
                     <p>EVENTS</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gifts" style={{ textDecoration: 'none' }}>
                     <p>GIFTS</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar2