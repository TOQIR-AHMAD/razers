import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  product: string;
  timer?: string;
  title: string;
  subtitle: string;
  links: { text: string; url: string }[]; // Updated links prop to an array of objects
  isSmallGrid?: boolean;
  label?: JSX.Element;
};

function ImageFull({
  product,
  timer,
  title,
  subtitle,
  links,
  isSmallGrid,
  label,
}: Props) {
  return (
    <div className="flex justify-center">
      <div
        className={`absolute ${
          isSmallGrid ? "my-8" : "my-16"
        } py-4 text-primary-100 mx-auto`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-1">
            {label && <div className="w-fit mx-auto text-xs">{label}</div>}
            <h2
              className={`${
                isSmallGrid ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"
              } uppercase font-bold`}
            >
              {title}
            </h2>
            <h3
              className={`${
                isSmallGrid ? "text-base md:text-lg" : " text-xl md:text-2xl"
              } uppercase px-8 opacity-90`}
            >
              {subtitle}
            </h3>
          </div>
          <div className="links flex gap-8 mt-4">
            {links.map((link, index) => (
              <Link
                to={link.url}
                className={`flex items-center hover:underline cursor-pointer ${
                  isSmallGrid ? "" : "md:text-xl"
                }`}
                key={index}
              >
                <p className="opacity-90">{link.text}</p>
                <div className="text-razer-green">
                  <FaAngleRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${product} bg-image ${
          isSmallGrid ? "h-[75vh] md:h-[100vh]" : "h-screen md:h-[100vh]"
        } overflow-hidden w-full`}
      ></div>
    </div>
  );
}

export default ImageFull;
