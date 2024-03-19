import React from "react";
import Chair1 from "../assets/nodic chair.png";
import Chair2 from "../assets/kruzo aero chair.png";
import Chair3 from "../assets/Ergonomi chair.png";
import "./products.css";
const Products = () => {
  return (
    <div className="product-container">
      <div className="product-info">
        <div className="product">
          <img src={Chair1} />
          <div className="rects"></div>

          <div>
            <h2>Nordic Chair</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit.
            </p>
            <span>Read More</span>
          </div>
        </div>
        {/* product - 2  */}
        <div className="product">
                <div className="rects"></div>

          <img src={Chair2} />
          <div>
            <h2>Nordic Chair</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit.
            </p>
            <span>Read More</span>
          </div>
        </div>
        {/* product - 3 */}
        <div className="product">
        <div className="rects"></div>
          <img src={Chair3} />
          <div>
            <h2>Ergonomic chair</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit.
            </p>
            <span>Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
