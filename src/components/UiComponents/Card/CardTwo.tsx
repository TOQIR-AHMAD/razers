import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function CardTwo({ imageUrl, title, description }: CardProps) {
  return (
    <div className="w-[400px] bg-black overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-[300px] w-full object-cover transition-transform transform hover:scale-110 duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xl md:text-1xl uppercase font-bold">{title}</p>
        <p className="uppercase opacity-90 font-thin py-2">{description}</p>

        <Link to="/next-page" className="flex items-center text-razer-green cursor-pointer">
          Learn more <FaAngleRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default CardTwo;
