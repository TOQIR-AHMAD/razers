import React, { useEffect, useState } from "react";
import CardDetails from "../components/UiComponents/Card/CardDetails";
import ImageFull from "../components/Home/Utility/ImageFull";
import Card from "../components/UiComponents/Card/Card";
import CardTwo from "../components/UiComponents/Card/CardTwo";

function Console() {
  const [videoPlayed, setVideoPlayed] = useState(false);
  useEffect(() => {
    setVideoPlayed(true);
  }, []);

  return (
    <>
      <div>
        <div>
          <CardDetails
            title={"CONSOLE GAMING"}
            description={
              "Whatever gaming console you own, make your setup truly next-gen with our expansive arsenal of high-performance hardware. From immersive audio gear and essential accessories to multi-platform PC gaming controllers, secure the upgrades you need to achieve your perfect PlayStation 5, Xbox Series X|S, or Nintendo Switch loadout."
            }
          ></CardDetails>
        </div>
        <ImageFull
          product={"console"}
          title={"RAZER KITSUNE"}
          subtitle={"All-Button Optical Arcade Controller for PS5™ and PC"}
          links={["learn More"]}
        ></ImageFull>
        {videoPlayed && (
          <video autoPlay muted>
            <source
              src="//assets2.razerzone.com/images/pnx.assets/95b9b2843ebbf5e0dbed114521d0f475/playstaions-category-video.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div className=" container-fluid bg-stone-800">
          <div className=" container mx-auto lg:flex justify-around py-6">
            <CardTwo
              imageUrl={
                "//assets2.razerzone.com/images/pnx.assets/40f75b61f5b8ce6fe765383edcd52978/razer-playstation-line-hammerhead-hyperspeed_500x500.jpg"
              }
              title={"Razer Hammerhead Hyperspeed"}
              description={"Wireless Multi-Platform Gaming Earbuds"}
            ></CardTwo>
            <CardTwo
              imageUrl={
                "//assets2.razerzone.com/images/pnx.assets/40f75b61f5b8ce6fe765383edcd52978/razer-playstation-line-wolverine-v2-pro_500x500.jpg"
              }
              title={"Razer Wolverine V2 Pro"}
              description={
                "Wireless Pro Gaming Controller for PS5™ Consoles and PC"
              }
            ></CardTwo>
            <CardTwo
              imageUrl={
                "//assets2.razerzone.com/images/pnx.assets/40f75b61f5b8ce6fe765383edcd52978/razer-playstation-line-kaira-pro-hyperspeed_500x500.jpg"
              }
              title={"Razer Kaira Pro HyperSpeed Licensed"}
              description={
                "Wireless Multi-Platform Gaming Headset with Haptics"
              }
            ></CardTwo>
          </div>
          <ImageFull
            product={"sonic"}
            title={"SONIC THE HEDGEHOG LIMITED EDITION"}
            subtitle={
              "Officially Licensed Xbox Controller and Quick Charging Stand"
            }
            links={["Learn More"]}
          ></ImageFull>
          <div className=" lg:flex justify-center gap-8 py-6 ">
            <CardTwo
              imageUrl={
                "//assets2.razerzone.com/images/pnx.assets/861e1148c49fd799f8821cca84916df0/razer-universal-quick-charging-stand-xbox-500x500-usca.jpg"
              }
              title={"UNIVERSAL QUICK CHARGING STANDS FOR XBOX"}
              description={"Quick Charger for Xbox Controllers"}
            ></CardTwo>
            <CardTwo
              imageUrl={
                "//assets2.razerzone.com/images/pnx.assets/861e1148c49fd799f8821cca84916df0/razer-quick-charging-for-ps5-category-latest.jpg"
              }
              title={"RAZER QUICK CHARGING STAND FOR PS5™"}
              description={
                "Quick Charging Stand for PS5™ DualSense™ Wireless Controller"
              }
            ></CardTwo>
          </div>
          <ImageFull
            product={"gameset"}
            title={"GAME. SET. MATCH."}
            subtitle={
              "Get more colorful companions to match your Xbox Wireless Controller"
            }
            links={["Explore your desired color combo"]}
          ></ImageFull>
          <ImageFull
            product={"connect"}
            title={"CONNECT. COMPETE. CONQUER."}
            subtitle={
              "Conquer the competition on PlayStation or Xbox with our latest game controllers"
            }
            links={["Learn More"]}
          ></ImageFull>
            <div className=" container mx-auto lg:flex justify-around py-8 ">
                     <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/razer-wolverine-v2-white_500x500.png"
            }
            title={"RAZER WOLVERINE V2"}
            description={"Wired Gaming Controller for Xbox Series X|S with additional remappable front-facing buttons"}
          ></Card>
          <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/razer-wolverine-v2-white_500x500.png"
            }
            title={"RAZER WOLVERINE V2 CHROMA WHITE"}
            description={"Fully Customizable Xbox Series X|S Controller with RGB Lighting"}
          ></Card>
          <Card
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/500x500-kaira-white.png"
            }
            title={"RAZER KAIRA FOR XBOX"}
            description={"Wireless Xbox Series X|S headset with cutting-edge drivers and mic"}
          ></Card>
          <Card
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/659b9c018fff41847dfe1cb0e1706b7f/500x500-kaira-white.png"
            }
            title={"RAZER KAIRA PRO FOR XBOX"}
            description={"Wireless, Bluetooth-capable Xbox Series X|S headset that supports mobile Xbox gaming"}
          ></Card>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Console;
