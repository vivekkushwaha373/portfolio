import React, { useState } from 'react'
import './Contact.css'
import con from '../../assets/contact.png'
import { useForm, ValidationError } from '@formspree/react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ab76ec29-443c-49cf-a372-ca11d8b15e03");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            toast.success('Thanks for submission')
        } else {
            console.log("Error", data);
            setResult(data.message);
            toast.error(result);
        }
    };
  return (
    <div id='contact'>
          <div className="leftcontact">
              <img src={con} alt="" />
          </div>
          <div className="rightcontact">
              <form id='form' onSubmit={onSubmit}>
                  <input required='true' name='name' type="text" placeholder='Name' />
                  <input required='true' type="email" name='email' placeholder='Email'/>
                  <textarea required='true' name="message" id="textarea" placeholder='Leave a message...'></textarea>
                  <input type="submit" id='btn' value='Submit'/>
              </form>
          </div>
    </div>
  )
}

export default Contact
