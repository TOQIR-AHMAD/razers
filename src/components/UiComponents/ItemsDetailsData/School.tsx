import React from "react";
import Card from "../Card/Card";
import CardTwo from "../Card/CardTwo";
import CardDetails from "../Card/CardDetails";
import ImageFull from "../../Home/Utility/ImageFull";

function School() {
  const url1 =
    "//assets2.razerzone.com/images/pnx.assets/9b7d3821df5869eaa49816af795d1e54/razer-blade-14-2022.png";
  const url2 =
    "//assets2.razerzone.com/images/pnx.assets/9b7d3821df5869eaa49816af795d1e54/razer-blade-15-2022.png";
  const url3 =
    "//assets2.razerzone.com/images/pnx.assets/9b7d3821df5869eaa49816af795d1e54/razer-blade-17-2022.png";
  const url4 =
    "https://assets2.razerzone.com/images/pnx.assets/9b7d3821df5869eaa49816af795d1e54/razer-blade-14-2023.png";
  const url5 =
    "https://assets2.razerzone.com/images/pnx.assets/734e8bd41073d23f35ac3c2cb08bb0a9/back-to-school-768x500.jpg";
  return (
    <>
      <div className=" container">
        <div className=" xl:flex sm:grid xl:py-6 sm:py-6 justify-center ">
          <Card
            imageUrl={url1}
            title={"Razer Blade 14 (2022)"}
            description={`"From
$1,799
With education discount"`}
          ></Card>
          <Card
            imageUrl={url2}
            title={"Razer Blade 15 (2022)"}
            description={`"From
$1,799
With education discount"`}
          ></Card>
          <Card
            imageUrl={url3}
            title={"Razer Blade 17 (2022)"}
            description={`"From
          $1,899
          With education discount"`}
          ></Card>
        </div>
        <div className=" container mx-auto xl:flex xl:py-6 sm:py-6 justify-center">
          <Card
            imageUrl={url4}
            title={"Razer Blade 14 (2023)"}
            description={`"From
$2,280
With education discount"`}
          ></Card>
          <Card
            imageUrl={url3}
            title={"Razer Blade 15 (2023)"}
            description={`"From
$2,375
With education discount"`}
          ></Card>
          <Card
            imageUrl={url4}
            title={"Razer Blade 16 (2023)"}
            description={`"From
$2,565
With education discount"`}
          ></Card>
        </div>
        <CardDetails
          title={"FAQS"}
          description={
            "We are currently available in the following countries and are looking to expand into more countries in the future."
          }
        ></CardDetails>
      </div>
    </>
  );
}

export default School;
