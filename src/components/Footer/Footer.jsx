import React from 'react'
import logo from "../../assets/logo.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router'

const Footer = () => {
    const links = [
        <NavLink to="/" className="normal-case text-sm mx-3 font-semibold">Home</NavLink>,
        <NavLink to="/bookings" className="normal-case text-sm mx-3 font-semibold">My Bookings</NavLink>, 
        <NavLink to="/blogs" className="normal-case text-sm mx-3 font-semibold">Blogs</NavLink>, 
        <NavLink to="/contact" className="normal-case text-sm mx-3 font-semibold ">Contact Us</NavLink>
    ]

    return (
        <div>
            <footer className="footer footer-horizontal footer-center  text-base-content bg-white rounded p-10 mt-8">
                
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-6' />
                    <a className="btn btn-ghost  text-xl">phudu</a>
                </div>
                <hr className='border border-dashed border-gray-400' />
                <nav className="grid grid-flow-col">
                    {
                        links
                    }
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        {/* YouTube */}
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-red-600">
                            <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-blue-800">
                            <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                        </a>

                        {/* Twitter/X */}
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter className='h-6 w-6'/>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin className='h-6 w-6 text-blue-600' />
                        </a>
                    </div>
                </nav>
                {/* <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside> */}
            </footer>
        </div>
    )
}

export default Footer