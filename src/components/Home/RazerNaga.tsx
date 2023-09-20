import ImageFull from "./Utility/ImageFull";

function RazerNaga() {
  return (
    <div>
      <ImageFull
        product="razer-naga"
        title="NEW RAZER BLADE 16 & 18 MERCURY"
        subtitle="PERFORMACE REIMAGINED"
        links={[
          { text: "Learn More", url: "/mercurylearn" },
          { text: "Buy", url: "/mercurybuy" },
        ]}
        isSmallGrid
      />
    </div>
  );
}

export default RazerNaga;
