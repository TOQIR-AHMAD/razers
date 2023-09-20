import React from "react";
import ImageFull from "../../Home/Utility/ImageFull";

function BladeBuy() {
  return (
    <div>
      <div className="xl:grid grid-cols-9 md:grid-cols-6 mx-10 gap-4">
        <div className="col-span-6 md:col-span-4">
          <ImageFull
            product={"razer-cart"}
            title={""}
            subtitle={""}
            links={[]}
          ></ImageFull>
        </div>
        <div className="col-span-3 md:col-span-2">
          <h1 className="text-4xl md:text-2xl font-bold py-9">
            Customize your Razer Blade 14
          </h1>
          <p className="py-">
            <ul>
              <li>AMD Ryzen™ 9 7940HS</li>
              <li>Windows 11 Home</li>
              <li>14" 240 Hz QHD+</li>
              <li>GeForce RTX 4070</li>
              <li>32 GB 5600 MHz RAM, 1 TB SSD</li>
            </ul>
          </p>
          <p className="text-2xl">Choose color</p>
          <p className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-white">
            Black
          </p>
          <p className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-slate-600">
            Mercury
          </p>
          <button className="border rounded-sm py-4 my-2 px-7 cursor-pointer text-2xl bg-razer-green text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BladeBuy;
