import React from 'react'
import Send from '../assets/Chat 3 (2).png'
import Frame86 from '../assets/Frame 86.png'
import Logo from '../assets/Logo.png'
const Subscribe = () => {
  return (
    <section className='subscribe'>
        <div className="jumbotron">
            <p className='pink'>Subscribe to Newsletters</p>
            <form action="">
                <input type="text" placeholder='Your Email'/>
                <button type='submit'>
                    Submit
                    <img src={Send} alt="" />
                </button>
            </form>
        </div>
        <div className="menu-detail">
            <div className="menu">
                <p>About</p>
                <p>Contact Us</p>
                <p>Explore</p>
                <p>Offers</p>
            </div>
            <div className="social">
                <img src={Frame86} alt="" />
            </div>
        </div>
        <div className="footer">
            <p>© 2024 InterfaceMage. All rights reserved.</p>
            <img src={Logo} alt="" />
            <p>
                <span>Terms of Service </span>
                <span> Privacy Policy</span>
            </p>
        </div>
    </section>
  )
}

export default Subscribe