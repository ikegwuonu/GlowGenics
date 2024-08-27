import React from 'react';
import Logo from '../assets/Logo.png';
import Arrowdown from '../assets/Arrow - Down 2.png';
import Search from '../assets/Frame 2.png';
import Cart from '../assets/Group 37173.png';
import Woman from '../assets/Frame 4.png';


const Header = () => {
  return (
    <section className='header'>
        <img src={Logo} alt="" />
        <div className="menu">
            <div className="dropdown">
                <p>Products</p>
                <img src={Arrowdown} alt="" />
            </div>
            <p>Offers</p>
            <p>Best Sellers</p>
            <p>About</p>
        </div>
        <div className="menu-end">
            <form action="">
                <input type="text" placeholder='Search'/>
                <img src={Search} alt="" />
            </form>
            <img src={Cart} alt="" />
            <img src={Woman} alt="" />
        </div>
            
        
    </section>
  )
}

export default Header