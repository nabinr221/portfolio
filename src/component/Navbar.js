import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-section">
                <div className="logo"><h1>Meet <span> Me</span> </h1></div>
                <div className="navbar-nav">
                    <ul>
                        <li><Link className='navlink' to={'/'}> Home </Link></li>
                        <li><Link className='navlink' to={'#about'}> About Us </Link></li>
                        <li><Link className='navlink' to={'/service'}> Service </Link></li>
                        <li><Link className='navlink' to={'/work'}> Work</Link></li>
                        <li><Link className='navlink' to={'/price'}> Price </Link></li>
                        <li><Link className='navlink' to={'/testimonial'}> Testimonial </Link></li>
                        <li><Link className='navlink' to={'blog'}> Blog </Link></li>
                        <li><Link className='navlink' to={'/contact '}> Contact </Link></li>
                    </ul>
                </div>
                <div className="cv-btn">Downlaod CV</div>
            </div>
        </>
    )
}

export default Navbar