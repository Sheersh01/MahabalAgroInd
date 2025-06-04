import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaEarthAsia } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo2.png";
const Navbar = () => {
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const wtspBtnRef = useRef(null);
  const langBtnRef = useRef(null);
  const navbarRef = useRef(null);
  const langDropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled more than 50px to change background
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(navbarRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = () => {
    if (!isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 50% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 50% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
    setIsOpen(!isOpen);
  };

  const handleHoverEnter = (ref) => {
    gsap.to(ref.current, {
      scale: 1.1,
      backgroundColor: "#ffffff",
      color: "#00461f",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      backgroundColor: "transparent",
      color: "#ffffff",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const toggleLangDropdown = () => {
    setLanguageDropdownOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[99]" ref={navbarRef}>
      {/* Navbar */}
      <div
        className={`lg:h-[5vw] w-full flex justify-between items-center lg:pl-24 lg:pr-12 h-[5vw] md:pl-12 pl-2 pr-2 md:pr-10 py-6 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#00461f] backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="lg:h-40 md:h-20 h-16 lg:translate-y-2 translate-y-1">
          <img className="w-full h-full object-contain" src={Logo} alt="" />
        </div>
        <div className="flex md:gap-4 gap-1 text-white md:text-[1.5vw] text-[2.5vw]">
          <button onClick={handleMenuClick}>
            <h1
              ref={menuBtnRef}
              onMouseEnter={() => handleHoverEnter(menuBtnRef)}
              onMouseLeave={() => handleHoverLeave(menuBtnRef)}
              className="border-white border md:px-4 md:py-2 px-3 py-2 rounded-full cursor-pointer"
            >
              MENU
            </h1>
          </button>

          <Link to="https://whatsapp.com/channel/0029Va5bDEgAzNbzOjnzau3h">
            <h1
              ref={wtspBtnRef}
              onMouseEnter={() => handleHoverEnter(wtspBtnRef)}
              onMouseLeave={() => handleHoverLeave(wtspBtnRef)}
              className="border-white border md:px-4 md:py-2 px-3 py-2 rounded-full cursor-pointer flex items-center gap-2 uppercase"
            >
              WhatsApp <FaWhatsapp />
            </h1>
          </Link>

          {/* Language Dropdown using Google Translate */}
          <div className="relative" ref={langDropdownRef}>
            <h1
              ref={langBtnRef}
              onClick={toggleLangDropdown}
              onMouseEnter={() => handleHoverEnter(langBtnRef)}
              onMouseLeave={() => handleHoverLeave(langBtnRef)}
              className="border-white border md:px-4 md:py-2 px-3 py-2 rounded-full cursor-pointer flex items-center gap-2 select-none"
            >
              {currentLang}
              <FaEarthAsia />
            </h1>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-[#00461f] rounded-lg shadow-md overflow-hidden z-50">
                <a
                  href="https://mahabal-agro.vercel.app.translate.goog/?_x_tr_sl=auto&_x_tr_tl=hi&_x_tr_hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCurrentLang("HN")}
                  className="px-4 py-2 block hover:bg-[#00461f] hover:text-white cursor-pointer transition-all"
                >
                  Hindi
                </a>
                <a
                  href="https://mahabal-agro.vercel.app.translate.goog/?_x_tr_sl=auto&_x_tr_tl=mr&_x_tr_hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCurrentLang("MR")}
                  className="px-4 py-2 block hover:bg-[#00461f] hover:text-white cursor-pointer transition-all"
                >
                  Marathi
                </a>
                <a
                  href="https://mahabal-agro.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCurrentLang("EN")}
                  className="px-4 py-2 block hover:bg-[#00461f] hover:text-white cursor-pointer transition-all"
                >
                  English
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#00461f] text-white flex flex-col items-center justify-center gap-8 text-4xl z-[2]"
        style={{
          clipPath: "circle(0% at 50% 0%)",
          WebkitClipPath: "circle(0% at 50% 0%)",
        }}
      >
        <button
          onClick={handleMenuClick}
          className="absolute top-10 right-10 text-white text-lg border border-white px-4 py-2 rounded-full"
        >
          CLOSE
        </button>

        <NavLink
          className="lg:text-6xl md:text-[5vw]"
          to="/"
          onClick={handleMenuClick}
        >
          Home
        </NavLink>
        <NavLink
          className="lg:text-6xl md:text-[5vw]"
          to="/about"
          onClick={handleMenuClick}
        >
          About
        </NavLink>
        <NavLink
          className="lg:text-6xl md:text-[5vw]"
          to="/contact"
          onClick={handleMenuClick}
        >
          Contact
        </NavLink>
        <NavLink
          className="lg:text-6xl md:text-[5vw]"
          to="/product"
          onClick={handleMenuClick}
        >
          Product
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
