import ImageFull from "./Utility/ImageFull";

function NewYearSpecial() {
  return (
    <div>
      <ImageFull
        product="new-year-special"
        title="RAZERCON 2023"
        subtitle="A DIGITAL CELEBRATION FOR GAMERS. BY GAMERS"
        links={[{ text: "SHOP NOW", url: "/razerconshop" }]}
        isSmallGrid
      />
    </div>
  );
}

export default NewYearSpecial;
