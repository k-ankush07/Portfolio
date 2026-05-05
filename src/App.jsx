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
    <>
      <Navbar />
      <ScrollToTop />

      {/* PAGE CONTENT */}
      <div className="relative">
        
        {/* OLD PAGE (still visible) */}
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
             {/* <Route path="/blog" element={<BlogPage />} /> */}
//         {/* <Route path="/work" element={<Work />} />
//        
        // <Route path="/guestbook" element={<Guestbook />} />
//         <Route path="/bucket-list" element={<BucketList />} />
//         <Route path="/links" element={<Links />} />
//         <Route path="/uses" element={<Uses />} />
//         <Route path="/attribution" element={<Attribution />} /> */}
        </Routes>

        {/* LOADING OVERLAY (only center, not full black) */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="px-6 py-3 bg-black/60 backdrop-blur-md  text-white text-sm">
             
            </div>
          </div>
        )}
      </div>

      <ConceptToCreation />
      <Footer />
    </>
  );
}

export default App;