import React from 'react'
import Rectangle4 from '../assets/Rectangle 4.png'

const Standard = () => {
  return (
    <section className='standard'>
        <div className="left">
            <img src={Rectangle4} alt="" />
        </div>
        <div className="right">
            <p>GlowGenics Sets the Standard in <span className='pink'>Beauty Excellence.</span>
                 </p>
            <div className="flex">
                <p><b>Specialized Skincare Solutions</b> <br />
                    <span>Discover personalized skincare solutions designed to cater to your unique beauty needs.</span>
                </p>
                <p><b>Artisanal Makeup Creations</b> <br />
                    <span>Indulge in artisanal makeup creations meticulously crafted to elevate your beauty.</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Standard