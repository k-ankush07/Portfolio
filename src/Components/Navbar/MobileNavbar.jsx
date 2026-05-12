import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/Images/Vector (3).svg";
import logo2 from "../../assets/Images/Vector (4).svg";
import { NavLink } from "react-router-dom";

import { FaHome, FaRegUserCircle, FaProjectDiagram, FaAddressBook } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiHouseSimpleFill, PiLinkSimpleBreakFill } from "react-icons/pi";
import { MdOutlineAttribution } from "react-icons/md";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const pages = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaRegUserCircle /> },
    { name: "Work", path: "/work", icon: <FaProjectDiagram /> },
    { name: "Blog", path: "/blog", icon: <FaBlogger /> },
    { name: "Guestbook", path: "/guestbook", icon: <FaAddressBook /> },
    { name: "Bucket List", path: "/bucket-list", icon: <IoLogoBitbucket /> },
    { name: "Book a call", path: "/contact", icon: <BiSolidPhoneCall /> },
    { name: "Uses", path: "/uses", icon: <PiHouseSimpleFill /> },
    { name: "Attribution", path: "/attribution", icon: <MdOutlineAttribution /> },
    { name: "Links", path: "/links", icon: <PiLinkSimpleBreakFill /> },
  ];

  const connect = [
    { name: "GitHub", url: "https://github.com/k-ankush07" },
    { name: "LinkedIn", url: "" },
    { name: "X (Twitter)", url: "" },
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Use", path: "/terms&condition" },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    if (hour < 21) return "Good Evening 🌇";
    return "Good Night 🌌";
  };

  return (
    <div className="lato-regular ">
      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed top-[16px] left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center justify-center px-4 py-[6px] bg-[rgba(48,48,48,0.8)] backdrop-blur-xl border border-white/10 rounded-full min-w-[130px] relative overflow-hidden">
          
          {/* Greeting */}
          <motion.span
            animate={{
              opacity: showGreeting ? 1 : 0,
              y: showGreeting ? 0 : -30,
            }}
            className="absolute text-white text-sm font-medium"
          >
            {getGreeting()}
          </motion.span>

          {/* Icons */}
          <motion.div
            animate={{
              opacity: showGreeting ? 0 : 1,
              y: showGreeting ? 10 : 0,
            }}
            className="flex items-center gap-10"
          >
            <NavLink to="/">
              <img src={logo} className="h-5" />
            </NavLink>

            <img
              src={logo2}
              onClick={() => setOpen(true)}
              className="h-5 cursor-pointer"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed  inset-0 bg-black/40 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "110%" }}
              className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[94%] z-[100] bg-[#212020] rounded-xl px-3 pt-3 pb-4 text-white max-h-[65vh] overflow-y-auto"
            >
              {/* Pages */}
              <h3 className="text-white/40 text-sm mb-2">Pages</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {pages.map((item, i) => (
                  <NavLink
                    to={item.path}
                    key={item.name}
                    onClick={() => setOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`flex items-center text-[11px] gap-3 p-2 rounded-lg
                          ${
                            isActive
                              ? "bg-white/15 border border-white/20"
                              : "bg-white/5 hover:bg-white/10"
                          }`}
                      >
                        <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span>{item.name}</span>
                      </motion.div>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Connect */}
              <h3 className="text-white/40 text-sm mb-2">Connect</h3>
              <div className="flex gap-3 mb-4">
                {connect.map((item) => (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.name}
                    onClick={() => setOpen(false)}
                  >
                    <div className="px-4 py-1 bg-white/5 rounded-xl text-[11px] hover:bg-white/10">
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>

              {/* Legal */}
              <h3 className="text-white/40 text-sm mb-2">Legal</h3>
              <div className="flex gap-3">
                {legal.map((item) => (
                  <NavLink
                    to={item.path}
                    key={item.name}
                    onClick={() => setOpen(false)}
                  >
                    {({ isActive }) => (
                      <div
                        className={`px-4 py-1 rounded-xl text-[11px]
                        ${
                          isActive
                            ? "bg-white/15"
                            : "bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}