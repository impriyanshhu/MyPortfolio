import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import bg from '../../assets/bg.mp4'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const access_key = import.meta.env.VITE_ACCESS_KEY;


  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const sendEmail = async (e) => {
    
    e.preventDefault();
    const toastId = toast.loading("Sending your message...");

    const formData = new FormData(e.target);
    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.update(toastId, {
        render: "Form Submitted Successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true
      });
      setName('');
      setEmail('');
      setMessage('');
    }
    else {
      console.log("Error", data);
      toast.update(toastId, {
        render: `Error: ${data.message}`,
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true
      });
    }
  }

  return (
    <div className='contact relative min-h-screen'>
      <video src={bg} autoPlay muted loop className='w-full h-full object-cover absolute -z-50'></video>

      <form onSubmit={sendEmail} className='flex flex-col items-center text-sm py-20 px-4 sm:px-6 lg:px-0 max-w-4xl mx-auto min-h-screen'>
        <p className="text-2xl text-primary font-medium pb-2">Contact Us</p>
        <h1 className="text-4xl font-semibold text-primary pb-6 text-center animate-pulse">Get in touch with us</h1>

        <div className="text-sm text-gray-400 text-center pb-10 space-y-2">
          <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <p>Whether you have a question, want to collaborate, or just want to say hello — feel free to drop me a message.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full sm:w-3/4">
          <div className="flex-1">
            <label className="text-white" htmlFor="name">Your Name</label>
            <input
              name="name"
              className="h-12 mt-2 w-full p-3 border border-white/70 bg-transparent backdrop-blur-[1px] shadow-lg focus:shadow-primary/30 rounded outline-none focus:border-primary transition"
              type="text"
              value={name}
              onChange={handleName}
              required
            />
          </div>
          <div className="flex-1">
            <label className="text-white" htmlFor="email">Your Email</label>
            <input
              name="email"
              className="h-12 mt-2 w-full p-3 border border-white/70 bg-transparent backdrop-blur-[1px] shadow-lg focus:shadow-primary/30 rounded outline-none focus:border-primary transition"
              type="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
        </div>

        <div className="mt-6 w-full sm:w-3/4">
          <label className="text-white" htmlFor="message">Message</label>
          <textarea
            name="message"
            className="w-full mt-2 p-3 h-40 border border-white/70 bg-transparent backdrop-blur-[1px] shadow-lg focus:shadow-primary/30 rounded resize-none outline-none focus:border-primary transition"
            value={message}
            onChange={handleMessage}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 bg-primary/60 text-white h-12 w-56 px-4 rounded active:scale-95 transition hover:bg-primaryDull"
        >
          Send Message
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />

    </div>
  )
}

export default Contact
