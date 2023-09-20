import React from 'react';

interface TailwindCarouselProps {
  imageUrl: string;
  heading :string;
  description: string;
}

function TailwindCarousel({ imageUrl,heading,description }: TailwindCarouselProps) {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        <div className="carousel">
          <div className="carousel-item transform translate-x-0">
            <img src={imageUrl} alt="Carousel Slide" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-3xl font-bold">{heading}</h3>
                <p className="text-xl">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindCarousel;
