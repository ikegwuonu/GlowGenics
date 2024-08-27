import React from 'react';
import Details from '../assets/Group 37166.png'


const Latest = () => {
  return (
    <section className='latest'>
        <div>
            <p className="one">Our Latest Beauty Care <br /> Innovation
            </p>
            <p className="two">
                Launching Soon!
            </p>
            <p className="three">
                Get ready to elevate your beauty routine with our upcoming new beauty care product. Stay tuned for the unveiling of our innovative formula designed to enhance your natural radiance.
            </p>
            <button type="button" >
                Check details
                <img src={Details} alt="" />
            </button>
        </div>
    </section>
  )
}

export default Latest