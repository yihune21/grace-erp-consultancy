import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import Training from "../components/Training/Training";
import HappyClients from "../components/HappyClients/HappyClients";
import Expertise from "../components/Expertise/Expertise";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/happy-clients" element={<HappyClients />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
