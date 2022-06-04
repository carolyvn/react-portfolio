import React from 'react';
import { BsLinkedin, BsGithub, BsStackOverflow } from "react-icons/bs";
import '../styles/footer.css';

const Footer = () => {

    return (
        <footer className='footer fixed-bottom'>
            <div className='container text-center mb-4 mt-auto'>
                {/* <p>Made with 💜 by Carol Yan</p> */}
               <div className='contact-icon'>
                   <a href='https://www.linkedin.com/in/huimei-carol-yan-b25542227/'><BsLinkedin /></a>
                   <a href='https://github.com/carolyvn'><BsGithub /></a>
                   <a href='#'><BsStackOverflow /></a>
               </div>
            </div>
        </footer>
    );
};

export default Footer;