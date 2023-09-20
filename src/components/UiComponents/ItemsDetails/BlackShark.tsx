import React from "react";
import Card from "../Card/Card";
import ImageFull from "../../Home/Utility/ImageFull";
import CardDetails from "../Card/CardDetails";

function BlackShark() {
  return (
    <>
      <ImageFull
        product={"razer-edge"}
        title={"280 G ULTRA‑LIGHTWEIGHT DESIGN"}
        subtitle={""}
        links={[]}
      ></ImageFull>
      <CardDetails
        title={"RAZER BLACKSHARK V2 HYPERSPEED"}
        description={
          "Get the non-stop comfort you need for all-day competitive play with the Razer BlackShark V2 HyperSpeed—an ultra-lightweight wireless headset for esports. Designed for maximum performance and minimal weight, experience a level of clarity and power that never gets in the way of your game."
        }
      ></CardDetails>
      <div className=" justify-center bg-slate-800 py-4 xl:flex sm:grid sm:py-2">
        <div className=" mx-4 py-2  ">
        <Card
          imageUrl={
            "https://assets2.razerzone.com/images/pnx.assets/58583518f7e409c23105ab1768d42eea/noise-isolating-earcups-500x500.webp"
          }
          title={"NOISE-ISOLATING EARCUPS WITH ULTRA‑SOFT MEMORY FOAM"}
          description={""}
        ></Card>
        </div>
        <div className=" mx-4 py-2">
        <Card
          imageUrl={
            "https://assets2.razerzone.com/images/pnx.assets/58583518f7e409c23105ab1768d42eea/thx-spatial-audio-500x500.webp"
          }
          title={"THX® SPATIAL AUDIO WITH ULTRA‑SOFT MEMORY FOAM FOAM"}
          description={""}
        ></Card>
        </div>
      </div>
    </>
  );
}

export default BlackShark;
