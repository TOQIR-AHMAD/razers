import React from "react";
import { Link } from "react-router-dom";
import ImageFull from "./Utility/ImageFull";

function RazerEdge() {
  return (
    <div>
      <ImageFull
        product="razer-edge"
        title="RAZER BLACKSHARK V2 HYPERSPEED"
        subtitle="FOR THE PRO"
        links={[
          { text: "Learn More", url: "/v2learn" },
          { text: "Buy", url: "/v2buy" },
        ]}
      />
      <Link to="/v2learn"></Link>
      <Link to="/v2buy"></Link>
    </div>
  );
}

export default RazerEdge;
