import CardTwo from "../Card/CardTwo";

function KitsuneBuy() {
  return (
    <div>
      <div className=" bg-slate-900">
        <div className="xl:grid grid-cols-9 md:grid-cols-6 mx-10 gap-4">
          <div className=" flex justify-center col-span-6 md:col-span-4 items-center">
            <CardTwo
              imageUrl={
                "//assets2.razerzone.com/images/pnx.assets/b612ba6608b91e74f4a331ab45cbd695/razercon-2023-battlestation.webp"
              }
              title={""}
              description={""}
            ></CardTwo>
          </div>
          <div className="col-span-3 md:col-span-2">
            <h1 className="text-4xl md:text-4xl font-bold py-4">
              Razer Kitsune
            </h1>
            <p className="py-1">
              <ul>
                <li>Precise Quad Movement Button Layout</li>
                <li>Razer™ Low-profile Linear Optical Switches</li>
                <li>Slim, Portable Form Factor</li>
                <li>GeForce RTX 4070</li>
                <li>32 GB 5600 MHz RAM, 1 TB SSD</li>
              </ul>
            </p>
            <p className="text-2xl">Choose price</p>
            <p className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-white">
              100$
            </p>
            <p className="border rounded-sm py-6 my-2 px-7 cursor-pointer text-2xl hover:text-slate-600">
              399$
            </p>
            <button className="border rounded-sm py-4 my-2 px-7 cursor-pointer text-2xl bg-razer-green text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitsuneBuy;
