import React from 'react'
import { NavLink } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <footer>
      <div className='footer_column'>

         <div className='f_row'>
          <div>
            <h2>PENINSULA PARIS</h2>
            <h3>19 Avenue Kléber</h3>
            <p>ppr@peninsula.com</p>
          </div>

          <div>
            <h2>THE PENINSULA HOTELS</h2>
            <ul>
               <li>
                <NavLink to="/aboutus" style={{ textDecoration: 'none' }}>
                    <p>About Us</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/contactus" style={{ textDecoration: 'none' }}>
                    <p>Contact Us</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/careers" style={{ textDecoration: 'none' }}>
                    <p>Careers</p> 
                    </NavLink>
                </li>
            </ul>
          </div>

          <div>
          <h2>MEDIA</h2>
            <ul>
               <li>
                <NavLink to="/newsroom" style={{ textDecoration: 'none' }}>
                    <p>Newsroom</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/presscontacts" style={{ textDecoration: 'none' }}>
                    <p>Press Contacts</p> 
                    </NavLink>
                </li>
            </ul>
          </div>

          <div>
          <h2>CORPORATE</h2>
            <ul>
               <li>
                <NavLink to="/sustainable-luxury" style={{ textDecoration: 'none' }}>
                    <p>Sustainable Luxury</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/data-privacy-and-security" style={{ textDecoration: 'none' }}>
                    <p>Data Privacy and Security Policy</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/accessibility-policy-statement" style={{ textDecoration: 'none' }}>
                    <p>Accessibility Policy Statement</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="https://www.hshgroup.com/" style={{ textDecoration: 'none' }}>
                    <p>The Hongkong and Shanghai Hotels, Limited</p> 
                    </NavLink>
                </li>
            </ul>
          </div>

          <div>
            <h2>NEWSLETTER SIGNUP.</h2>
            <h3>Enter your email address</h3>
            <input></input>
          </div>
         </div>

         <div className='f_column'>
         <div className='icon'>
          <IconButton>
            <InstagramIcon style={{ 'color': "rgb(152, 128, 96)", "fontSize":"1.5rem"}}/>
          </IconButton>
          <IconButton>
            <FacebookIcon style={{ 'color': "rgb(152, 128, 96)", "fontSize":"1.5rem"}}/>
          </IconButton>
          <IconButton>
            <XIcon style={{ 'color': "rgb(152, 128, 96)", "fontSize":"1.5rem"}}/>
          </IconButton>
          <IconButton>
            <YouTubeIcon style={{ 'color': "rgb(152, 128, 96)", "fontSize":"1.75rem"}}/>
          </IconButton>
         </div>
          <div><p className='border_bottom'></p></div> 
          <div className='small-links'>
            <ul>
              <li>
                <NavLink to="/data-privacy-and-security" style={{ textDecoration: 'none' }}>
                    <p>Data Privacy and Security Policy</p> 
                    </NavLink>
                </li>
                <li>
                <NavLink to="/accessibility-policy-statement" style={{ textDecoration: 'none' }}>
                    <p>Accessibility Policy Statement (US Properties)</p> 
                    </NavLink>
                </li>
              </ul>
              <p>Cookies Settings</p>
          </div>
          <div className='lang-rights'>
            <div className='lang'>
            <h3>LANGUAGE</h3>
            <a href='#'>English</a>
            <a href='#'>한국어</a>
            <a href='#'>日本語</a>
            <a href='#'>français</a>
            <a href='#'>español</a>
            <a href='#'>português</a>
            </div>
           <div>
           <p>2023 HSH Management Services Limited. (The Peninsula Hotels) All Rights Reserved.</p>
          </div> 
          </div>
         </div>
      </div>
    </footer>
  )
}

export default Footer