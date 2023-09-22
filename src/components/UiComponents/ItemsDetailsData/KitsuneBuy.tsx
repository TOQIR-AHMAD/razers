import React, { useState } from "react";
import Shop from "../../../pages/Shop";

const KitsuneBuy: React.FC = () => {
  const [cartItems, setCartItems] = useState<
    { title: string; price: number }[]
  >([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (title: string, price: number) => {
    const newItem = { title, price };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <div className="bg-slate-900">
        <div className="xl:grid grid-cols-9 md:grid-cols-6 mx-10 gap-4">
          <div className="flex justify-center col-span-6 md:col-span-4 items-center">
            <img
              src="//assets2.razerzone.com/images/pnx.assets/b612ba6608b91e74f4a331ab45cbd695/razercon-2023-battlestation.webp"
              alt="Kitsune"
              className=""
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <h1 className="text-4xl md:text-4xl font-bold py-4">
              Razer Kitsune
            </h1>
            <p className="py-1">
              <ul>
                <li>Precise Quad Movement Button Layout</li>
                <li>Razer™ Low-profile Linear Optical Switches</li>
                <li>Slim, Portable Form Factor</li>
                <li>GeForce RTX 4070</li>
                <li>32 GB 5600 MHz RAM, 1 TB SSD</li>
              </ul>
            </p>
            <p className="text-2xl">Choose price</p>
            <button
              className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-white"
              onClick={() => {
                addToCart("Razer Kitsune - $100", 100);
                setShowCart(true);
              }}
            >
              Add to Cart ($100)
            </button>
            <button
              className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-slate-600"
              onClick={() => {
                addToCart("Razer Kitsune - $399", 399);
                setShowCart(true);
              }}
            >
              Add to Cart ($399)
            </button>
          </div>
        </div>
      </div>
      {showCart && (
        <Shop
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          title={""}
          price={0}
          imageUrl={""}
        />
      )}
    </div>
  );
};

export default KitsuneBuy;
