import React from "react";
import CartItem from "../../Home/Utility/CartItem";
import CardTwo from "../Card/CardTwo";

function BladeLearn() {
  return (
    <div className="container mx-auto flex justify-center">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <CardTwo
          imageUrl="https://assets3.razerzone.com/zStdp4z65eHbNaNUG-wHlRp9lzc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh06%2F9286402375710%2Fblade14-p8-fhd-500x500.png"
          title="AMD Ryzen™ 9 6900HX Processor (8-Cores /16-Threads, 20MB Cache, Up to 4.9 GHz max boost) with Radeon™ 680M Graphics"
          description=""
        ></CardTwo>
        <CardTwo
          imageUrl="https://assets3.razerzone.com/9V-IMwk9fHvzlFw6ma4kOf1yIHA=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png"
          title="AMD Ryzen™ 9 7940HS Processor (8-Cores /16-Threads, 16MB L3 Cache, Up to 5.2 GHz max boost) with Radeon™ 780M Graphics"
          description=""
        ></CardTwo>
      </div>
    </div>
  );
}

export default BladeLearn;
