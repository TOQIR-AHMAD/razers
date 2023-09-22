import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/UiComponents/Footer/Footer";
import Navbar from "./components/UiComponents/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import PC from "./pages/PC";
import Console from "./pages/Console";
import ProductCard from "./components/UiComponents/Card/ProductCard";
import BlackShark from "./components/UiComponents/ItemsDetailsData/BlackShark";
import SharkBuy from "./components/UiComponents/ItemsDetailsData/SharkBuy";
import School from "./components/UiComponents/ItemsDetailsData/School";
import BladeBuy from "./components/UiComponents/ItemsDetailsData/BladeBuy";
import BladeLearn from "./components/UiComponents/ItemsDetailsData/BladeLearn";
import RazerConShop from "./components/UiComponents/ItemsDetailsData/RazerConShop";
import KitsuneLearn from "./components/UiComponents/ItemsDetailsData/KitsuneLearn";
import KitsuneBuy from "./components/UiComponents/ItemsDetailsData/KitsuneBuy";
import MercuryLearn from "./components/UiComponents/ItemsDetailsData/MercuryLearn";
import MercuryBuy from "./components/UiComponents/ItemsDetailsData/MercuryBuy";
import Kishilearn from "./components/UiComponents/ItemsDetailsData/Kishilearn";
import KishiBuy from "./components/UiComponents/ItemsDetailsData/KishiBuy";
import Enkilearn from "./components/UiComponents/ItemsDetailsData/Enkilearn";
import EnkiBuy from "./components/UiComponents/ItemsDetailsData/EnkiBuy";
import EdgeBuy from "./components/UiComponents/ItemsDetailsData/EdgeBuy";
import EdgeLearn from "./components/UiComponents/ItemsDetailsData/EdgeLearn";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="bg-primary-900 text-primary-300 font-primary text-primary min-h-[200vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PC" element={<PC />} />
          <Route path="/Console" element={<Console />} />
          <Route path="/cart" element={<ProductCard />} />

          <Route path="/v2learn" Component={BlackShark} />
          <Route path="/v2buy" Component={SharkBuy} />
          <Route path="/bladelearn" Component={BladeLearn} />
          <Route path="/bladebuy" Component={BladeBuy} />
          <Route path="/schoolshop" Component={School} />
          <Route path="/razerconshop" Component={RazerConShop} />
          <Route path="/kitsunelearn" Component={KitsuneLearn} />
          <Route path="/kitsunebuy" Component={KitsuneBuy} />
          <Route path="/MercuryLearn" Component={MercuryLearn} />
          <Route path="/Mercurybuy" Component={MercuryBuy} />
          <Route path="/kishilearn" Component={Kishilearn} />
          <Route path="/kishibuy" Component={KishiBuy} />
          <Route path="/enkilearn" Component={Enkilearn} />
          <Route path="/enkibuy" Component={EnkiBuy} />
          <Route path="/edgelearn" Component={EdgeLearn} />
          <Route path="/edgebuy" Component={EdgeBuy} />
          <Route
            path="/shopings"
            element={
              <Shop
                cartItems={[]}
                removeFromCart={function (index: number): void {
                  throw new Error("Function not implemented.");
                }}
                title={""}
                price={0}
                imageUrl={""}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
