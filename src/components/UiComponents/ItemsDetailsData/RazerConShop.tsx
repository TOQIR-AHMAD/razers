import React from "react";
import ImageFull from "../../Home/Utility/ImageFull";
import CardDetails from "../Card/CardDetails";
import Carouselitem from "../../Home/Utility/CartItem";

function RazerConShop() {
  return (
    <div className="container mx-auto">
      <CardDetails
        title={"EMPOWERING CONTENT CREATION WITH RAZER GEAR"}
        description={"11:00 AM (PDT)"}
      ></CardDetails>
      <ImageFull
        product={"girl"}
        title={""}
        subtitle={""}
        links={[]}
      ></ImageFull>
      <CardDetails
        title={
          "THE ULTIMATE BATTLESTATION SHOWDOWN: UNLEASHING CREATIVITY WITH RAZER GEAR"
        }
        description={"11:15 AM (PDT)"}
      ></CardDetails>
      <ImageFull
        product={"razerconimg"}
        title={""}
        subtitle={""}
        links={[]}
      ></ImageFull>
      <div className="max-w-md mx-auto bg-slate-900 p-6 my-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700  text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RazerConShop;
