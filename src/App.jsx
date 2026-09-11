

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import PrivacyPage from "./Pages/PrivacyPage.jsx";
import ConceptToCreation from "./Components/Homepage/ConceptToCreation.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import TermsPage from "./Pages/TermsPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import WorkPage from "./Pages/WorkPage.jsx";
import WorkDetailPage from "./Pages/WorkDetailPage.jsx";
import TryFumPage from "./Components/WorkDetailPages/TryFumPage.jsx";
import RetroSpecPage from "./Components/WorkDetailPages/RetroSpecPage.jsx";
import WoahBrosPage from "./Components/WorkDetailPages/WoahBrosPage.jsx"
import Doinkrollerz from "./Components/WorkDetailPages/Doinkrollerz.jsx";
import ApmzeePage from "./Components/WorkDetailPages/ApmzeePage.jsx";
import Lonepouches from "./Components/WorkDetailPages/Lonepouches.jsx";
import HoperozaPage from "./Components/WorkDetailPages/HoperozaPage.jsx";
import VitteloPage from "./Components/WorkDetailPages/VitteloPage.jsx";
import HappyStufPage from "./Components/WorkDetailPages/HappyStufPage.jsx";
import SofaDirect from "./Components/WorkDetailPages/SofaDirect.jsx";







function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="bg-[#0a0a0a] text-[#ffffff] min-h-screen transition-colors duration-300">
      <Navbar />
      <ScrollToTop />

      <Routes location={displayLocation}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-condition" element={<TermsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:title" element={<WorkDetailPage />} />
        <Route path="/work/tryfum" element={<TryFumPage />} />
        <Route path="/work/retrospec" element={<RetroSpecPage />} />
        <Route path="/work/woahbros" element={<WoahBrosPage />} />
        <Route path="/work/doinkrollerz" element={<Doinkrollerz />} />
        <Route path="/work/apmzee" element={<ApmzeePage />} />
        <Route path="/work/lonepouches" element={<Lonepouches />} />
        <Route path="/work/hoperoza" element={<HoperozaPage/>} />
        <Route path="/work/vittelo" element={<VitteloPage />} />
        <Route path="/work/happystuf" element={<HappyStufPage />} />
        <Route path="/work/sofadirect" element={<SofaDirect />} />
{/* 
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/links" element={<Links />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/attribution" element={<Attribution />} /> */}
      </Routes>

      {isLoading && (
        <>
        </>
      )}

      <ConceptToCreation />

      <Footer />
    </div>
  );
}

export default App;