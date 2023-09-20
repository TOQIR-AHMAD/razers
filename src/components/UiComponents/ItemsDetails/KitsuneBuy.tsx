import React from 'react'
import ImageFull from '../../Home/Utility/ImageFull'

function KitsuneBuy() {
  return (
    <div>
      <div>
      <div className="xl:grid grid-cols-9 md:grid-cols-6 mx-10 gap-4">
        <div className="col-span-6 md:col-span-4">
          <ImageFull
            product={"console"}
            title={""}
            subtitle={""}
            links={[]}
          ></ImageFull> 
        </div>
        <div className="col-span-3 md:col-span-2">
          <h1 className="text-4xl md:text-4xl font-bold py-9">
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

    </div>
  )
}

export default KitsuneBuy