import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaEarthAsia, FaWhatsapp, FaArrowRightLong } from "react-icons/fa6";
import Logo from "../assets/logo2.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation("navbar");

  const [currentLang, setCurrentLang] = useState(i18n.language.toUpperCase());

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng.toUpperCase());
    setLanguageDropdownOpen(false);
  };

  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const wtspBtnRef = useRef(null);
  const langBtnRef = useRef(null);
  const navbarRef = useRef(null);
  const langDropdownRef = useRef(null);
  const overlayContentRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(navbarRef.current, { y: "-100%", duration: 0.5 });
      } else {
        gsap.to(navbarRef.current, { y: "0%", duration: 0.5 });
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
    const tl = gsap.timeline();
    const items =
      overlayContentRef.current.querySelectorAll("a, p, button, img");
    if (!isOpen) {
      tl.to(menuRef.current, {
        clipPath: "circle(150% at 50% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
      }).fromTo(
        items,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.4"
      );
    } else {
      tl.to(items, {
        autoAlpha: 0,
        y: 50,
        duration: 0.4,
        ease: "power3.in",
        stagger: { each: 0.1, from: "end" },
      }).to(
        menuRef.current,
        {
          clipPath: "circle(0% at 50% 0%)",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.2"
      );
    }
    setIsOpen(!isOpen);
  };

  const handleHoverEnter = (ref) => {
    gsap.to(ref.current, {
      scale: 1.1,
      backgroundColor: "#ffffff",
      color: "#2E1403",
      duration: 0.3,
    });
  };

  const handleHoverLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      backgroundColor: "transparent",
      color: "#ffffff",
      duration: 0.3,
    });
  };

  const toggleLangDropdown = () => {
    setLanguageDropdownOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[99]" ref={navbarRef}>
      <div
        className={`lg:h-[5vw] w-full flex justify-between items-center lg:pl-24 lg:pr-12 h-[5vw] md:pl-12 pl-2 pr-2 md:pr-10 py-6 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#2E1403] backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="lg:h-40 md:h-20 h-16 lg:translate-y-2 translate-y-1">
          <Link to="/">
            <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="flex md:gap-4 gap-1 text-[#F6F0E8] lg:text-[1.2vw] md:text-[1.5vw] text-[2.5vw]">
          <button onClick={handleMenuClick}>
            <h1
              ref={menuBtnRef}
              onMouseEnter={() => handleHoverEnter(menuBtnRef)}
              onMouseLeave={() => handleHoverLeave(menuBtnRef)}
              className="border-[#F6F0E8] border md:px-4 md:py-2 px-3 py-2 rounded-full cursor-pointer"
            >
              {t("menu")}
            </h1>
          </button>

          <Link to="https://whatsapp.com/channel/0029Va5bDEgAzNbzOjnzau3h">
            <h1
              ref={wtspBtnRef}
              onMouseEnter={() => handleHoverEnter(wtspBtnRef)}
              onMouseLeave={() => handleHoverLeave(wtspBtnRef)}
              className="border-[#F6F0E8] border md:px-4 md:py-2 px-3 py-2 rounded-full cursor-pointer flex items-center gap-2 uppercase"
            >
               {t("whatsapp")} <FaWhatsapp />
            </h1>
          </Link>

          <div className="relative" ref={langDropdownRef}>
            <h1
              ref={langBtnRef}
              onClick={toggleLangDropdown}
              onMouseEnter={() => handleHoverEnter(langBtnRef)}
              onMouseLeave={() => handleHoverLeave(langBtnRef)}
              className="border-[#F6F0E8] border md:px-4 md:py-2 px-3 py-2 rounded-full cursor-pointer flex items-center gap-2 select-none"
            >
              {currentLang}
              <FaEarthAsia />
            </h1>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#F6F0E8] text-[#2E1403] rounded-lg shadow-md overflow-hidden z-50">
                <button onClick={() => changeLang("en")} className="px-4 py-2 block hover:bg-[#2E1403] hover:text-[#F6F0E8] w-full text-left">English</button>
                <button onClick={() => changeLang("hi")} className="px-4 py-2 block hover:bg-[#2E1403] hover:text-[#F6F0E8] w-full text-left">Hindi</button>
                <button onClick={() => changeLang("mr")} className="px-4 py-2 block hover:bg-[#2E1403] hover:text-[#F6F0E8] w-full text-left">Marathi</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full min-h-screen bg-[#2E1403] text-[#F6F0E8] z-[2]"
        style={{ clipPath: "circle(0% at 50% 0%)" }}
      >
        <div className="w-full flex lg:justify-end jusitfy-between items-center px-2 mb-10 lg:px-8 lg:pt-6">
          <div className="w-full">
            <img className="lg:hidden block md:w-30 md:h-30 w-16 h-16 -translate-y-[4px]" src={Logo} alt="Logo" />
          </div>
          <button
            onClick={handleMenuClick}
            className="text-[#F6F0E8] lg:text-lg text-sm border border-[#F6F0E8] lg:px-5 px-4 py-2 rounded-full hover:bg-[#F6F0E8] hover:text-[#2E1403] hover:scale-[1.2] transition-all"
          >
            {t("close")}
          </button>
        </div>

        <div
          ref={overlayContentRef}
          className="flex lg:flex-row flex-col lg:py-24 justify-evenly lg:mt-20 md:mt-10 px-4 font-thin"
        >
          <div className="flex flex-col gap-6 md:w-[40%] w-full mb-10">
            {["home", "about", "contact", "awareness", "product"].map((key) => (
              <NavLink
                key={key}
                className="w-fit lg:text-4xl md:text-[4.8vw] text-[6vw] hover:text-[#D98324]"
                to={key === "home" ? "/" : `/${key}`}
                onClick={handleMenuClick}
              >
                {t(key)}
              </NavLink>
            ))}
          </div>
          <div className="lg:w-[50%] w-full  lg:-translate-y-10">
            <img className="lg:block hidden w-50 h-50" src={Logo} alt="Logo" />
            <p className="lg:text-[2vw] md:text-[3vw] text-[5vw] mb-4 font-thin">
              {t("paragraph")}
            </p>
            <Link to="/contact">
              <button onClick={handleMenuClick} className="flex items-center gap-2 hover:gap-4 transition-all lg:text-[1.2vw] md:text-[3.5vw] text-[5vw] text-[#D98324] font-semibold">
                {t("talk")} <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
