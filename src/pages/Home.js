import React from 'react';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import '../styles/home.css';


const Home = () => {

    return (
        <div className='container home-container py-5'>
            <div className='row py-lg-5 d-flex col-12'>
                <div className='col-lg-6 col-md-8'>
                    <h1 className=''>Hi There! </h1>
                    <h1 className=''>I'm Carol Yan</h1>
                    <p>A passionate Full Stack Developer</p>
                    <p>
                        <a href='/about' className='btn btn-primary'>Learn More About Me</a>
                    </p>
                </div>
                {/* <div className='col-lg-4'>
                    <img src='https://media4.giphy.com/media/bcKmIWkUMCjVm/200.webp?cid=ecf05e4736pqazmnv1ti3r4w6vzfeg9cc9wv6yf0sfubul7m&rid=200.webp&ct=g'/>
'
                </div> */}
            </div>
        </div>
        
    )
};

export default Home;
