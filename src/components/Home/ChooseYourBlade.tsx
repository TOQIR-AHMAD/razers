import ImageFull from "./Utility/ImageFull"

function ChooseYourBlade() {
  return (
    <div>
      <ImageFull
        product="choose-your-blade"
        title="RAZER EDGE"
        subtitle="THE ULTIMATE ANDROID GAMING HANDHELD"
        links={[
          { text: "Learn More", url: "/edgelearn" },
          { text: "Buy", url: "/edgebuy" },
        ]}
        isSmallGrid
      />
    </div>
  )
}

export default ChooseYourBlade
