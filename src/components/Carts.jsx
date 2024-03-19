import React from 'react';
import Chair1 from "../assets/nodic chair.png"
import Chair2 from "../assets/kruzo aero chair.png"
import Chair3 from "../assets/Ergonomi chair.png"
import './cart.css'

const Carts = () => {
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Crafted with excellence material.</h1>
        <p>Donec vitae odio quis nisl dapibus malesuada. vitae odio quis nisl dapibu Nullam ac aliquet velit. Aliquam vulputate.</p> <br/>
        <button>Explore</button>
      </div>
      <div className='cart-items'>
        {/* chair 1 */}
        <div className='cart-info'>
          <img src={Chair1} alt="Nordic Chair" />
          <p>Nordic Chair</p>
          <b>＄50.00</b>
        </div>
        {/* chair 2 */}
        <div className='cart-info'>
          <img src={Chair2} alt="Kruzo Aero chair" />
          <p>Kruzo Aero chair</p>
          <b>＄78.05</b>
        </div>
        {/* chair 3 */}
        <div className='cart-info'>
          <img src={Chair3} alt="Ergonomic chair" />
          <p>Ergonomic chair</p>
          <b>＄60.20</b>
        </div>
      </div>
    </div>
  )
}

export default Carts;
