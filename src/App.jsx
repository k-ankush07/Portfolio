
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import SkillsSlick from './Components/Homepage/SkillsSlick.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx"
import HomePage from './Pages/HomePage.jsx'
function App() {


  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/links" element={<Links />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/attribution" element={<Attribution />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
