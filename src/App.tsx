import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/UiComponents/Footer/Footer";
import Navbar from "./components/UiComponents/Navbar/Navbar";

import HomePage from "./pages/HomePage";
import "./App.css";
import PC from "./pages/PC";
import Console from "./pages/Console";
import ProductCard from "./components/UiComponents/Card/ProductCard";
import RazerEdge from "./components/Home/RazerEdge";
import BlackShark from "./components/UiComponents/ItemsDetails/BlackShark";
import SharkBuy from "./components/UiComponents/ItemsDetails/SharkBuy";
import School from "./components/UiComponents/ItemsDetails/School";
import RazerBlade from "./components/Home/RazerBlade";
import BladeBuy from "./components/UiComponents/ItemsDetails/BladeBuy";
import BladeLearn from "./components/UiComponents/ItemsDetails/BladeLearn";
import RazerConShop from "./components/UiComponents/ItemsDetails/RazerConShop";
import KitsuneLearn from "./components/UiComponents/ItemsDetails/KitsuneLearn";
import KitsuneBuy from "./components/UiComponents/ItemsDetails/KitsuneBuy";
import MercuryLearn from "./components/UiComponents/ItemsDetails/MercuryLearn";
import MercuryBuy from "./components/UiComponents/ItemsDetails/MercuryBuy";
import Kishilearn from "./components/UiComponents/ItemsDetails/Kishilearn";
import KishiBuy from "./components/UiComponents/ItemsDetails/KishiBuy";
import Enkilearn from "./components/UiComponents/ItemsDetails/Enkilearn";
import EnkiBuy from "./components/UiComponents/ItemsDetails/EnkiBuy";
import EdgeBuy from "./components/UiComponents/ItemsDetails/EdgeBuy";
import EdgeLearn from "./components/UiComponents/ItemsDetails/EdgeLearn";
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
          <Route path="/shopings" element={<Shop />} />
          

          {/* route for buy and learn more */}

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
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
