import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about-us" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
