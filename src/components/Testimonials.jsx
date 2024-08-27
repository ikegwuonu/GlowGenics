import React from 'react'
import Button from '../assets/Button.png'
import Ellipse5 from '../assets/Ellipse 5.png'
import Ellipse51 from '../assets/Ellipse 5 (1).png'
import Ellipse52 from '../assets/Ellipse 5 (2).png'
import Frame58 from '../assets/Frame 58.png'
import Frame94 from '../assets/Frame 94.png'


const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div className='intro'>
            <div className='left'>
                <p>Hear What Others Are Saying!</p>
                <p>Discover why our customers are loving our products and join the glowing reviews!</p>
            </div>
            <div className='right'>
                <img src={Button} alt="" />

            </div>
        </div>
        <div className="main">
            <div className="testimonial">
                <img src={Ellipse5} alt="" />
                <p className='name'>Lenna Wilson</p>
                <img src={Frame58} alt="" />
                <p>GlowGenics skincare range has truly elevated my beauty routine. Their products are luxurious, effective, and have given my skin a radiant glow like never before. I'm thrilled to have discovered such a game-changer!</p>
                <img src={Frame94} alt="" />
            </div>
            <div className="testimonial">
                <img src={Ellipse52} alt="" />
                <p className='name'>Leslie Alexander</p>
                <img src={Frame58} alt="" />
                <p>GlowGenics products have transformed my skincare routine. My complexion has never looked healthier or felt smoother. I highly recommend their products to anyone seeking radiant, glowing skin!</p>
                <img src={Frame94} alt="" />
            </div>
            <div className="testimonial">
                <img src={Ellipse51} alt="" />
                <p className='name'>Kriston Watson</p>
                <img src={Frame58} alt="" />
                <p>GlowGenics skincare line has truly revolutionized my routine, leaving my skin radiant and rejuvenated. Their products are a must-have for anyone looking to achieve a luminous complexion. I couldn't be happier with the results!</p>
                <img src={Frame94} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Testimonials