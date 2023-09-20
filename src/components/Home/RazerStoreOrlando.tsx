import ImageFull from "./Utility/ImageFull"

function RazerStoreOrlando() {
  return (
    <div>
      <ImageFull
        product="razerstore-orlando"
        title="RAZER KISHI V2 PRO"
        subtitle="MOBILE GAMING IS NOW HARDCORE"
        links={[
          { text: "Learn More", url: "/kishilearn" },
          { text: "Buy", url: "/kishibuy" },
        ]}
        isSmallGrid
      />
    </div>
  )
}

export default RazerStoreOrlando
