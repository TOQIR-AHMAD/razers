import React, { useEffect, useState } from "react";
import ImageFull from "../../Home/Utility/ImageFull";
import CardDetails from "../Card/CardDetails";

function KitsuneLearn() {
  const [videoPlayed, setVideoPlayed] = useState(false);
  useEffect(() => {
    setVideoPlayed(true);
  }, []);
  return (
    <>
      <div>
        <div>
          {videoPlayed && (
            <video autoPlay muted>
              <source
                src="//assets2.razerzone.com/images/pnx.assets/f7b672693e925bd4550d2e5359f52b9e/superlessbeautyshot3.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </div>
        <CardDetails title={"POWERED BY RAZER CHROMA™ RGB"} description={"With multiple color combinations and a suite of effects, customize the Razer Kitsune’s lighting to match your fighting style using a series of pre-loaded shortcuts."}></CardDetails>
        <ImageFull product={"console1"} title={""} subtitle={""} links={[]}></ImageFull>
        <CardDetails title={"FAQS"} description={"Where is the joystick on the Razer Kitsune?"}></CardDetails>
      </div>
    </>
  );
}

export default KitsuneLearn;
