import React from "react";
import "./ProCard.css";


const ProductCard = () => {
  return (
    <div className=" container mx-auto">
      <div className="card">
        <div className="card-img">
          <div className=""></div>
        </div>
        <div className="card-title">{}</div>
        <div className="card-subtitle">
          Product description. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </div>
        <hr className="card-divider" />
        <div className="card-footer">
          <div className="card-price">
            <span>$</span> 123.45
          </div>
          <button className="card-btn">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
