import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar2 from './Navbar2'
import peninsulaParis from '../../assets/video/peninsulaParis.mp4';


function Header() {
    return (
        <>
        <video src={peninsulaParis} className='video' autoPlay loop muted/>
        <div className='PHeader'>
           <NavLink to="/" style={{ textDecoration: 'none' }}>
                <div className='header'>
                   <div className='logo'>
                   <h1>THE PENINSULA</h1>
                   <p>PARIS</p>
                   </div>

                  <div className='button'>
                    <button className='contact_btn'>CONTACT US</button>
                    <button className='reserve_btn'>RESERVE</button>
                  </div>
               </div>
            </NavLink>
            
           <Navbar2 className="navbar2_list"/>
            <p className='border_bottom'></p>
            <p className='italic_info'>Exquisitely Parisian, in the heart of the City of Light</p>
        </div>
        </>
    )
}

export default Header