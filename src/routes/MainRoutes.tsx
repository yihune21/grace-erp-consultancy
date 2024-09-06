import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUsPage from "../pages/AboutUsPage";
import Training from "../components/Training/Training";
import HappyClients from "../components/HappyClients/HappyClients";
import ExpertisePage from "../pages/ExpertisePage";
import SaaSServicePage from "../pages/SaaSServicePage";
import ContactUsPage from "../pages/ContactUsPage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/training" element={<Training />} />
        <Route path="/happy-clients" element={<HappyClients />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/SaaS-service" element={<SaaSServicePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
