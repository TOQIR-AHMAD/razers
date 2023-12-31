import React from "react";
import ImageFull from "../../Home/Utility/ImageFull";
import CardTwo from "../Card/CardTwo";

function BladeBuy() {
  return (
    <div className="bg-slate-900">
      <div className="xl:grid grid-cols-9 md:grid-cols-6 mx-10 gap-4 ">
        <div className="col-span-6 md:col-span-4 flex justify-center items-center">
        <CardTwo imageUrl={'https://assets3.razerzone.com/XIDB-uoPhS2wYxXtCi6SZPe8qRo=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhad%2Fh96%2F9539343515678%2F230614-blade14-p95-mercury-1500x1000-1.jpg'} title={''} description={''}></CardTwo>
       
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
          <p className="text-2xl">Choose price</p>
          <p className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-white">
            449$
          </p>
          <p className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-slate-600">
            999$
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
