"use client";
import React, { useState } from "react";
import { FaPaperPlane } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import sendEmail from '../components/sendEmail';
import '../app/globals.css';

function Home() {



    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        sendEmail(formData);
        setFormData({ name: '', email: '', message: '' });
        handleClick()
    };

    return (
        <div id='Contact' className=" bg-black relative flex items-center justify-center text-center h-[100vh]">
            <div className="mx-auto w-full text-center flex items-center justify-center">
                <div className="w-full md:w-[50%] flex items-center justify-center mt-[30px]">
                    <h1 className={toggle ? 'flex' : 'hidden'}>Email sent successfully</h1>
                    <form className={toggle ? 'hidden' : "grid grid-cols-1 gap-5 w-[80%]"} onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="name" className="text-white">
                                Full Name
                            </label>
                            <input
                                onChange={handleChange}
                                value={formData.name}
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm bg-gray-900 border border-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-white">
                                Email Address
                            </label>
                            <input
                                onChange={handleChange}
                                value={formData.email}
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm bg-gray-900 border border-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="example@domain.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-white">
                                Your message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                id="message"
                                name="message"
                                rows="3"
                                className="shadow-sm bg-gray-900 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="Type your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="flex justify-center items-center gap-2 text-black bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg transition-all duration-300"
                        >
                            <FaPaperPlane /> Send
                        </button>
                        <div className="flex items-center justify-center gap-6 text-[35px] text-white">
                            <a href="https://github.com/ignaciogarcia-dev"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/ignaciogarciadev/"><FaLinkedin /></a>
                            <a href="https://twitter.com/ignaciog_dev"><FaTwitter /></a>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Home;