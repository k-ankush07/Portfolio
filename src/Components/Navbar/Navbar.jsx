import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Images/Vector (3).svg";
import logo2 from "../../assets/Images/Vector (4).svg";
import { motion } from "framer-motion";
import MobileNavbar from "./MobileNavbar";
import { IoLink } from "react-icons/io5";
import { FaBook, FaCreditCard } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const menuItems = [
  {
    label: "Guestbook",
    desc: "Let me know you were here",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80",
    link: "/guestbook",
  },
  {
    label: "Bucket List",
    desc: "Things to do at least once in my life",
    img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
    link: "/bucket-list",
  },
];

const listItems = [
  {
    icon: <IoLink />,
    label: "Links",
    desc: "All my links are here",
    link: "/links",
  },
  {
    icon: <FaBook />,
    label: "Uses",
    desc: "A peek into my digital...",
    link: "/uses",
  },
  {
    icon: <FaCreditCard />,
    label: "Attribution",
    desc: "Journey to create this site",
    link: "/attribution",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isPinned, setIsPinned] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const closeTimer = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    if (hour < 21) return "Good Evening 🌇";
    return "Good Night 🌌";
  };

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!isPinned) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      closeTimer.current = setTimeout(() => setOpen(false), 150);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const path = location.pathname;
    const matched = navLinks.find((n) => n.path === path);
    if (matched) setActive(matched.name);
    else if (path === "/") setActive("Home");
    else setActive("");
    // when route changes, always close and unpin the dropdown
    setOpen(false);
    setIsPinned(false);
  }, [location.pathname]);

  return (
    <section className="sticky top-0 z-50">
      <div className="container">
        <MobileNavbar />

        <div className="h-18 hidden md:block text-white relative">
          {/* LEFT LOGO */}
          <div className="absolute top-5 z-50">
            <Link
              to="/"
              onClick={() => {
                setOpen(false);
                setIsPinned(false);
                setActive("Home");
              }}
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* RIGHT ICON */}
          <div className="absolute top-5 right-0 z-50">
            <Link
              to="/contact"
              onClick={() => {
                setOpen(false);
                setIsPinned(false);
              }}
            >
              <img src={logo2} alt="icon" />
            </Link>
          </div>

          {/* CENTER NAVBAR */}
          <motion.div
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-1/2 mt-2 -translate-x-1/2 z-[200] motion-layer"
          >
            <motion.div
              initial={{ width: "150px" }}
              animate={{
                width: showGreeting
                  ? "150px"
                  : open
                  ? "700px"
                  : "376px",
              }}
              transition={{ duration: 0.35 }}
              className="bg-[rgba(38,38,38,0.92)] backdrop-blur-2xl border border-white/10 shadow-[0_12px_50px_rgba(0,0,0,0.7)] overflow-hidden rounded-[22px] motion-layer"
            >
              {/* TOP NAV */}
              <div className="flex justify-center relative overflow-hidden">
                <div className="flex items-center justify-center gap-1 px-3 py-[3px] min-h-[42px]">
                  {/* GREETING */}
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: showGreeting ? 1 : 0,
                      y: showGreeting ? 0 : -10,
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 -translate-x-1/2 text-white text-[16px] font-medium whitespace-nowrap z-20"
                  >
                    {getGreeting()}
                  </motion.span>

                  {/* NAV LINKS */}
                  <motion.nav
                    initial={false}
                    animate={{
                      opacity: showGreeting ? 0 : 1,
                      y: showGreeting ? 10 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-1 motion-layer"
                  >
                    {navLinks.map((item) => (
                      <button
                        key={item.name}
                        onMouseEnter={() => {
                          if (!isPinned) setOpen(false);
                        }}
                        onClick={() => {
                          setActive(item.name);
                          setOpen(false);
                          setIsPinned(false);
                          navigate(item.path);
                        }}
                        className="relative px-[14px] py-[6px] cursor-pointer rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-150"
                      >
                        {active === item.name && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white/15 rounded-full"
                            transition={{
                              type: "tween",
                              ease: "linear",
                              duration: 0.14,
                            }}
                          />
                        )}

                        <span
                          className={`relative z-10 ${
                            active === item.name
                              ? "text-white"
                              : "text-gray-400"
                          }`}
                        >
                          {item.name}
                        </span>
                      </button>
                    ))}

                    {/* MORE BTN */}
                    <button
                      onMouseEnter={handleMouseEnter}
                      onClick={() => {
                        setIsPinned((prev) => !prev);
                        setOpen((prev) => !prev);
                      }}
                      className="flex items-center cursor-pointer  px-[14px] py-[6px] rounded-full text-white/70 hover:text-white transition-all duration-150"
                    >
                      More
                      <MdKeyboardArrowDown
                        className={`text-xl transition-all duration-150 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </motion.nav>
                </div>
              </div>

              {/* DROPDOWN */}
              <div
                onMouseEnter={() => !isPinned && setOpen(true)}
                onMouseLeave={() => !isPinned && setOpen(false)}
                className={`transition-all duration-300 overflow-hidden ${
                  open
                    ? "max-h-[500px] opacity-100 px-6 py-4"
                    : "max-h-0 opacity-0 px-6 py-0"
                }`}
              >
                <div className="grid grid-cols-3 gap-4">
                  {/* LEFT CARDS */}
                  {menuItems.map((item, i) => (
                    <Link
                      key={item.label}
                      to={item.link}
                      onClick={() => {
                        setOpen(false);
                        setIsPinned(false);
                      }}
                      className={`relative rounded-[13px] overflow-hidden h-[200px] cursor-pointer transition-all duration-300 ${
                        open
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: `${i * 100}ms`,
                      }}
                    >
                      <img
                        src={item.img}
                        className="w-full h-full object-cover brightness-[0.65]"
                      />

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-[15px] font-bold">
                          {item.label}
                        </h3>
                        <p className="text-[12px] text-white/70">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* RIGHT LIST */}
                  <div className="flex flex-col gap-3 justify-center">
                    {listItems.map((item, i) => (
                      <Link
                          key={item.label}
                          to={item.link}
                          onClick={() => {
                            setOpen(false);
                            setIsPinned(false);
                          }}
                          className={`flex items-center gap-3 p-3 rounded-xl bg-white/7 hover:bg-white/12 cursor-pointer transition-all duration-400 ${
                            open
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                          style={{
                            transitionDelay: `${(i + 2) * 100}ms`,
                          }}
                        >
                        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                          {item.icon}
                        </div>

                        <div>
                          <h4 className="text-[13.5px] font-semibold">
                            {item.label}
                          </h4>
                          <p className="text-[11px] text-white/50">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}