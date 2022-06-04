import React from 'react';
import '../styles/about.css';

const About = () => {
    
    return (
        <div className='container about-container col-12 text-center '>
            <div className='row container-fluid'>
                <div>
                    <img src='https://github.com/carolyvn/my-portfolio/blob/main/assets/images/carol.jpeg?raw=true' alt='Avatar' title='Carol' className='avatar'></img>
                </div>
                <div className='aboutme'>
                    <h4 className='hero-heading'>Hi There! I am Carol. Nice to meet you!</h4>
                    <p className='justify-content-center hero-paragraph'>
                        I am a Full Stack web developer at UW BootCamp. <br />
                        I just graduated from the program, <br />and looking forward to build cool projects with skills I have learned. <br />
                        Currently live in Seattle, WA.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default About;