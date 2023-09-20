import React from "react";
import TailwindCarousel from "../../Home/Utility/Carosal";
import Carouselitem from "../../Home/Utility/CartItem";

function SharkBuy() {
  const url =
    "https://assets3.razerzone.com/6tj6oWCBdr0mb0UDOW10WDqStcM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fh0b%2F9654942400542%2F230907-blackshark-v2-hyperspeed-black-1500x1000-1.jpg";
  return (
    <div className="xl:grid grid-cols-3 mx-10 gap-4">
      <div className="col-span-2 ">
        <TailwindCarousel
          imageUrl={
            "https://assets3.razerzone.com/6tj6oWCBdr0mb0UDOW10WDqStcM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fh0b%2F9654942400542%2F230907-blackshark-v2-hyperspeed-black-1500x1000-1.jpg"
          }
          heading={"Razer BlackShark V2 HyperSpeed"}
          description={"FOR THE PRO"}
        ></TailwindCarousel>
      </div>
      <div className="w-full sm:w-1/2  flex justify-center mx-auto items-center sm:my-3">
        <Carouselitem
          imageUrl={url}
          name={"v2 pro"}
          price={"65 $"}
        ></Carouselitem>
      </div>
    </div>
  );
}

export default SharkBuy;
