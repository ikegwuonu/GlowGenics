import React from 'react'
import Frame21 from '../assets/Frame 21.png';
import Frame20 from '../assets/Frame 20.png';
import Bag from '../assets/Bag 2.png';
import Chat from '../assets/Chat 3.png';
import Frame33 from '../assets/Frame 33.png';
import Frame34 from '../assets/Frame 33 (1).png';
import Frame35 from '../assets/Frame 33 (2).png';
import Group from '../assets/Group 37165.png';
import Star from '../assets/Group 37166.png';
import Anime from '../assets/Frame 32.png';

const Hero = () => {
  return (
    <section className='hero'>
        <div className="left">
            <span>Disc <img src={Frame21} alt="" /> ver your</span>
            <span>Signature Gl <img src={Frame20} alt="" /> w</span>
            <p>Experience the transformative power of GlowGenics and unveil <br /> your signature glow today.</p>
            <button type="button" className='button'>
                <p>Shop Now</p>
                <img src={Bag} alt="" />
            </button>

            <div className="button-group">
                <button type="button" className='button'>
                   <img src={Frame33} alt="" />
                   <div className="button-p">
                        <p>Free Shipping</p>
                        <p>On order above Rs.499</p>
                   </div>
                </button>
                <button type="button" className='button'>
                   <img src={Frame34} alt="" />
                   <div className="button-p">
                        <p>Easy Returns</p>
                        <p>15 Days refund Policy</p>
                   </div>
                </button>
                <button type="button" className='button'>
                   <img src={Frame35} alt="" />
                   <div className="button-p">
                        <p>100% Authentic</p>
                        <p>Sourced Directly</p>
                   </div>
                </button>
            </div>

        </div>
        <div className="right">
            <img src={Group} alt="" className='group'/>
            <div className="hero-img">
                <p>Trending Now</p>
                <div className="hero-img-wrap">
                    <div className="left">
                        <img src={Frame20} alt="" />
                        <button type="button" className='button'>
                            <p> Beauty</p>
                            <img src={Chat} alt="" />
                        </button>
                    </div>
                    <div className="right">
                        <img src={Frame21} alt="" />
                        <button type="button" className='button'>
                            <p>Facials</p>
                            <img src={Chat} alt="" />
                        </button>
                    </div>
                </div>

            </div>
            
            <img src={Star} alt="" className='star' />
            <div  className='anime-div'>          
                <img src={Anime} alt=""className='anime'/>
                <p>Seraphina</p>
            </div>
        </div>
    </section>
  )
}

export default Hero