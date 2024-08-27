import React from 'react'
import Arrow from '../assets/Arrow - Down 2.png'
import Ellipse4 from '../assets/Ellipse 4.png'
import Button from '../assets/Button.png'

const Trending = () => {
  return (
    <section className='trending'>
        <div className="deals">
            <div className="deal">
                <p>Trending Deals</p>
                <p>Dscover unbeatable offers on the topbeauty essentials</p>
            </div>
            <button type="button" >
                New Arrival 
                <img src={Arrow} alt="" />    
            </button>
        </div>
        <div className="main">
            <div className="product">
                <img src={Ellipse4} alt="" />
                <div className="deals">
                    <div className="deal">
                        <p>50% Off Cream</p>
                        <p>Grab exclusive discount curated for you</p>
                    </div>
                    <img src={Button} alt="" />
                </div>
            </div>
            <div className="product">
                <img src={Ellipse4} alt="" />
                <div className="deals">
                    <div className="deal">
                    <p>50% Off Cream</p>
                    <p>Grab exclusive discount curated for you</p>
                    </div>
                    <img src={Button} alt="" />
                </div>
            </div>
            <div className="product">
                <img src={Ellipse4} alt="" />
                <div className="deals">
                    <div className="deal">
                    <p>50% Off Cream</p>
                    <p>Grab exclusive discount curated for you</p>
                    </div>
                    <img src={Button} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending