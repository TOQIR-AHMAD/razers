import ImageFull from "./Utility/ImageFull"

function RazerHammerHead() {
  return (
    <div>
      <ImageFull
        product="razer-hammerhead"
        title="NEW RAZER BLADE 14"
        subtitle="SMALL SIZE. BIG PERFORMANCE"
        links={[
          { text: "Learn More", url: "/bladelearn" },
          { text: "Buy", url: "/bladebuy" },
        ]}
      />
    </div>
  )
}

export default RazerHammerHead
