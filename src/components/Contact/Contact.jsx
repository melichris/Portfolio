import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d766516e-f209-42a5-bcee-641202726e7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("success")
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div id='contact' className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently available to take a new project, so feel free to contact me eny time</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>melichristian51@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>+237-653-369-392</p>
            </div>
            <div className="contact-detail">
              <p>Douala- Cameroon</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right' action="">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name...' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email...' name='email' />
          <label htmlFor="">Write a message</label>
          <textarea name="message" rows='8' placeholder='Enter your message...' id=""></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact