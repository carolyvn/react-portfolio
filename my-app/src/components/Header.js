import React from 'react';
import '../styles/header.css';

const Header = () => {

    return (
       <header className='bg-light mb-5'>
           <nav className='navbar navbar-expand-md navbar-light fixed-top'>
               <div className='container'>
                   <a href='/' className='d-flex navbar-brand'>Carol Yan</a>
                   <button className='navbar-toggler collapsed'>
                   </button>
                   <div className='navbar-collapse collapse'>
                       <div className='ms-auto navbar-nav'>
                           {/* <div className='nav-item'>
                               <a className='nav-link' href='/'>
                                   Home
                               </a>
                           </div> */}
                           <div className='nav-item'>
                               <a className='nav-link' href='/about'>
                                   About Me
                               </a>
                           </div>
                           <div className='nav-item'>
                               <a className='nav-link' href='/project'>
                                   Portfolio
                               </a>
                           </div>
                           <div className='nav-item'>
                               <a className='nav-link' href='/contact'>
                                   Contact
                               </a>    
                           </div>
                           <div className='nav-item'>
                               <a className='nav-link' href='/resume'>
                                   Resume
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
           </nav>
       </header> 
    );
};

export default Header;