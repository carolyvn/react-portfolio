import React, { useState } from 'react';
import { BsLinkedin, BsGithub, BsStackOverflow } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = () => {
        if (name && email && message) {
            const serviceId = 'service_27vi297';
            const templatedId = 'template_76ajcxg';
            const userId ='HV4FDVvwwd4gXWf-4';
            const templateParams ={
                name,
                email,
                message
            };

            emailjs.send(serviceId, templatedId, templateParams, userId)
              .then(resposne => console.log(resposne))
              .alert('You message has been sent!')
              .then(error => console.log(error));
            
            
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            console.log(emailSent);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div>
            {/* <div className='contact pt-5>Contact</h1> */}
            <div className='row d-flex justify-content-center align-items-center h-100 contact-body'>
                <div className='col-md-6'>
                    <form className='row p-5 mx-1 mx-md-4' onSubmit={handleSubmit}>
                        <h2 className='contact-title mb-5'>Contact</h2>
                        <div className='mb-3 form-group'>
                            <label className='form-label'>Name:</label>
                            <input 
                              className='form-control form-input' 
                              placeholder='Your Name'
                              type='text'
                              value={name}
                              onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='form-label'>Email:</label>
                            <input 
                              className='form-control form-input' 
                              placeholder='Your Email'
                              type='email' 
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='form-label'>Message:</label>
                            <textarea 
                              className='form-control' 
                              rows='3' 
                              placeholder='Type your message' 
                              value={message}
                              onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                        <div className='mb-3 form-group'>
                            <button className='btn btn-primary' type='submit'>Send</button>

                        </div>
                    </form>
                </div>
                <div className='col-md-6'>
                    <h2>Other places</h2>
                    <ul>
                        <li className='contact-link'><a href='https://www.linkedin.com/in/huimei-carol-yan-b25542227/'><BsLinkedin /></a></li>
                        <li className='contact-link'><a href='https://github.com/carolyvn'><BsGithub /></a></li>
                        <li className='contact-link'><a href='#'><BsStackOverflow /></a></li>
                    </ul>
                </div>

    
            </div>
        </div>
    )
};

export default Contact;


