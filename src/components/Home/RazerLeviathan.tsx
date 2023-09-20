import ImageFull from "./Utility/ImageFull";

function RazerLeviathan() {
  return (
    <div>
      <ImageFull
        product="razer-leviathan"
        title="RAZER ENKI PRO"
        subtitle={`"AUTOMOBILE LAMBORGHINI EDITION`}
        links={[
          { text: "Learn More", url: "/enkilearn" },
          { text: "Buy", url: "/enkibuy" },
        ]}
        isSmallGrid
      />
    </div>
  );
}

export default RazerLeviathan;
