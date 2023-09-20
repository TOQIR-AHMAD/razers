import React from "react";

interface Carouselitem {
  imageUrl: string;
  name: string;
  price: string;
}

function Carouselitem({ imageUrl, name, price }: Carouselitem) {
  return (
    <div className=" flex justify-center items-center">
      <div className="card flex flex-col justify-center p-10 rounded-lg">
        <div className="prod-img">
          <p className="text-2xl uppercase text-gray-100 font-bold text-center sm:pb-2">
            {name}
          </p>
          <img
            src={imageUrl}
            className="w-full object-cover object-center"
            alt="Product"
          />
        </div>
        <div className="prod-info grid gap-2">
          <div>
            <ul className="flex flex-row justify-center items-center">
              <li className="mr-4 last:mr-0">
                <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#blue"
                    className="block w-6 h-6 bg-blue-900 rounded-full"
                  ></a>
                </span>
              </li>
              <li className="mr-4 last:mr-0">
                <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#yellow"
                    className="block w-6 h-6 bg-yellow-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li className="mr-4 last:mr-0">
                <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#red"
                    className="block w-6 h-6 bg-red-500 rounded-full"
                  ></a>
                </span>
              </li>
              <li className="mr-4 last:mr-0">
                <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                  <a
                    href="#green"
                    className="block w-6 h-6 bg-green-500 rounded-full"
                  ></a>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p className="font-bold text-xl text-white">{price}</p>
            <button className="px-6 py-2 transition bg-slate-300 ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carouselitem;
