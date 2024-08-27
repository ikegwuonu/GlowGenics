import React from 'react'
import Frame70 from '../assets/Frame 70.png'
import Send from '../assets/Chat 3 (2).png'

const Assistance = () => {
  return (
    <section className='assistance'>
        <div className="left">
            <p>Need Assistance? <br />
            We're Here to Help!</p>
            <p>Our friendly team is exited to makeup your questions with our beauty expert answers.</p>
            <div className="image">
                <img src={Frame70} alt="" />
                <p>We’re having 5k+ happy beautiful faces.</p>
            </div>
        </div>
        <div className="right">
            <p className='pink'>Let's get in touch</p>
            <form action="">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Phone Number' />
                <input type="text" placeholder='Reason for contact' />
                <input type="text" placeholder='Message' />
                <button type="submit">
                    Let's Connect
                    <img src={Send} alt="" />
                </button>
            </form>

        </div>
    </section>
  )
}

export default Assistance