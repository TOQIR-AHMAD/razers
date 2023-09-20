import Card from "../components/UiComponents/Card/Card";
import CardDetails from "../components/UiComponents/Card/CardDetails";
import CardTwo from "../components/UiComponents/Card/CardTwo";
import ImageFull from "../components/Home/Utility/ImageFull";

function PC() {
  return (
    <>
      <CardDetails
        title={"LAPTOPS & DESKTOPS"}
        description={
          "From cutting-edge gaming and creator laptops to high-end components for your dream PC build, Razer systems are meticulously crafted to provide the ultimate performance for work and play. Supported by our diverse collection of gamer accessories and PC peripherals, we’ve got you covered when it comes to your unique gaming or office desktop needs."
        }
      ></CardDetails>
      <div className="container-fluid bg-gray-900">
        <div className=" container lg:mx-auto lg:flex md:flex sm:grid lg:justify-evenly py-8">
          <Card
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-16-2023-laptop-500x500.jpg"
            }
            title={"LAPTOPS"}
            description={"Sleek high-performance gaming laptops"}
          />
          <Card
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/desktops-components-category--500x500.jpg"
            }
            title={"DESKTOPS & COMPONENTS"}
            description={
              "Engineered for enthusiasts and designed for performance"
            }
          />

          <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/accessories-category-500x500.jpg"
            }
            title={"ACCESSORIES"}
            description={"Crafting the perfect gaming experience"}
          />
          <Card
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/skins-500x500.jpg"
            }
            title={"LAPTOPS"}
            description={"Sleek high-performance gaming laptops"}
          />
        </div>
      </div>
      <CardDetails
        title={"PC & LAPTOP PERIPHERALS"}
        description={
          "The most powerful rigs mean nothing without the best gear to match. Gain a competitive edge with PC and laptop peripherals armed with our latest technology. From award-winning mice and keyboards to industry-leading headsets and monitors, deck out your setup with our comprehensive selection of peripherals for gaming and work."
        }
      />
      <div className="container-fluid bg-stone-800">
        <div className=" container lg:mx-auto lg:flex md:flex sm:grid lg:justify-evenly py-8">
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mice-category-500x500.jpg"
            }
            title={"MICE"}
            description={
              "Pixel-perfect precision for any hand size and grip style"
            }
          ></CardTwo>
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/mousemats-category-500x500.jpg"
            }
            title={"MOUSE MATS"}
            description={
              "Soft, hard, and hybrid designs to enhance your control"
            }
          ></CardTwo>
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/keyboards-category-500x500.jpg"
            }
            title={"MICE"}
            description={"Optical, mechanical, and every type in between"}
          ></CardTwo>
        </div>
      </div>
      <div className="container-fluid bg-stone-800">
        <div className=" container lg:mx-auto lg:flex md:flex sm:grid lg:justify-evenly py-8">
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/headsets-category-500x500.jpg"
            }
            title={"HEADSETS"}
            description={
              "Tuned for gaming, lifestyle, or a perfect mix of bothe"
            }
          ></CardTwo>
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/speakers-category-500x500.jpg"
            }
            title={"SPEAKERS"}
            description={"Set the soundstage for full-range immersion"}
          ></CardTwo>
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/8127df0df8433ada296a732b23f3b9b4/chairs-category-500x500.jpg"
            }
            title={"CHAIRS"}
            description={"Perfecting the science of comfort and support"}
          ></CardTwo>
        </div>
      </div>
      <ImageFull
        product="pinks"
        title=" COMPLETE YOUR SETUP"
        subtitle="A COLOR FOR EVERY STYLE"
        links={["Learn More"]}
        isSmallGrid
      />
      <CardDetails
        title={"CONTENT CREATION & STREAMING"}
        description={
          "Producing quality content requires quality hardware. From high-fidelity webcams to professional-grade microphones, deliver the best possible streaming experience with our range of content creation gear. Whether you're streaming from your gaming desktop or laptop, we’ve got everything you need to create content that stands out from the rest."
        }
      />
      <div className="container-fluid bg-gray-900">
        <div className=" container lg:mx-auto lg:flex md:flex sm:grid lg:justify-evenly pb-8">
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/webcams-category-500x500.jpg"
            }
            title={"WEBCAMS"}
            description={
              "Stunning visual fidelity for streaming and productivity"
            }
          ></CardTwo>
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/microphones-category-500x500.jpg"
            }
            title={"MICROPHONES"}
            description={"Engineered for crystal-clear voice pickup"}
          ></CardTwo>
          <CardTwo
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/capturecard&others-category-500x500.jpg"
            }
            title={"CAPTURE CARD & OTHERS"}
            description={"For a professional streaming advantage"}
          ></CardTwo>
        </div>
      </div>
      <CardDetails
        title={"SOFTWARE"}
        description={
          "From customizing keybinds and Chroma effects to optimizing audio and game performance, Razer's software platforms are designed to enhance your gaming and productivity. Seamlessly integrated with our extensive collection of gamer accessories and PC peripherals, get the most out of our devices and create a single ecosystem for your gaming or office desktop."
        }
      ></CardDetails>

      <div className="container-fluid bg-stone-800">
        <div className=" container lg:mx-auto lg:flex md:flex sm:grid lg:justify-evenly py-6">
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-axon-category-500x500-update.jpg"
            }
            title={"RAZER AXON"}
            description={
              "Bring your desktop to life with high-quality wallpapers that sync with your Razer Chroma™ RGB ecosystem"
            }
          ></CardTwo>
          <CardTwo
            imageUrl={
              "https://assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-chroma-rgb-category-500x500.jpg"
            }
            title={"RAZER CHROMA™ RGB"}
            description={
              "Experience full RGB customization and deeper immersion with the world’s largest lighting ecosystem that supports hundreds of games and thousands of devices."
            }
          ></CardTwo>
          <CardTwo
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/razer-cortex-category-500x500-update.jpg"
            }
            title={"RAZER CORTEX"}
            description={
              "From boosting system performance to discovering gaming deals, enhance your play with one powerful platform."
            }
          ></CardTwo>
        </div>
      </div>
      <div className="container-fluid bg-stone-800">
        <div className=" container lg:mx-auto lg:flex md:flex sm:grid lg:justify-evenly pb-6">
          <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/5ece92a7cea49ed09ca34572a1145eb3/razer-synapse-category-500x500-update.jpg"
            }
            title={"RAZER SYNAPSE"}
            description={
              "Maximize your unfair advantage with Razer Synapse 3, the unified cloud-based hardware configuration tool that takes your Razer devices to the next level. "
            }
          />
          <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/thx-spatial-audio-category-500x500.jpg"
            }
            title={"THX SPATIAL AUDIO"}
            description={
              "Unlock full customization with a surround sound application featuring more extensive audio calibration and custom-tuned game profiles."
            }
          />

          <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/71-surround-sound-category-500x500.jpg"
            }
            title={"7.1 SURROUND SOUND"}
            description={
              "Experience accurate positional sound for the competitive advantage."
            }
          />
          <Card
            imageUrl={
              "//assets2.razerzone.com/images/pnx.assets/cf07588e1e08bf7767da32b1181bc4bf/streamer-companion-app-category-500x500.jpg"
            }
            title={"STREAMER COMPANION APP"}
            description={
              "Put on a show for your stream by customizing how your Seiren Emote or Emote display reacts to your audience."
            }
          />
        </div>
      </div>
    </>
  );
}

export default PC;
