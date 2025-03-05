import React, { useEffect, useState } from "react";
import "./navbar.css";
import SirketLogo from "../../Öz Aladağ Sigorta/Görseller/nbLogo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  const [isVisibleN, setIsVisibleN] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // Başlangıçta en üstte
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const [menuOpen, setMenuOpen] = useState(false); // Menü açık/kapalı durumu
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    const handleScaroll = () => {
      setIsAtTop(window.scrollY > 0); // Eğer sayfa en üstte değilse görünür yap
    };

    window.addEventListener("scroll", handleScaroll);

    return () => {
      window.removeEventListener("scroll", handleScaroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos + 2 && currentScrollPos > 150) {
        setIsVisibleN(false);
      } else if (currentScrollPos < prevScrollPos) {
        setIsVisibleN(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {isAtTop ? (
        <nav className="navbar_Container">
          {isMobile ? (
            <>
              <div className="mobiliz">
                <div className="markaIsmiMobil">
                  <h1>Öz Aladağ Sigorta</h1>
                </div>
                <div
                  className="hamburger"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <FaTimes className="mobil_ikon" />
                  ) : (
                    <FaBars className="mobil_ikon" />
                  )}
                </div>
              </div>
              {menuOpen && (
                <div className="nav-links-mobile">
                <Link
                  to="/#ana"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/" ? "activeLink" : ""
                  }`}
                >
                  Anasayfa
                </Link>
                <Link
                  to="/kurumsal"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/kurumsal" ? "activeLink" : ""
                  }`}
                >
                  Kurumsal
                </Link>
                <Link
                  to="/#teklif"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/urunlerimiz" ? "activeLink" : ""
                  }`}
                >
                  Hizmetlerimiz
                </Link>

                <Link
                  to="/iletisim"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/iletisim" ? "activeLink" : ""
                  }`}
                >
                  Iletisim
                </Link>
              </div>
              )}
            </>
          ) : (
            <div className={`navbar ${isVisibleN ? "visibleH" : "hiddenH"}`}>
              <div className="navbar_Logo">
                <img src={SirketLogo} alt="" />
              </div>
              <div className="nav_links">
                <Link
                  to="/#ana"
                  className={`myLinkV ${
                    location.pathname === "/" ? "activeLink" : ""
                  }`}
                >
                  Anasayfa
                </Link>
                <Link
                  to="/kurumsal"
                  className={`myLinkV ${
                    location.pathname === "/kurumsal" ? "activeLink" : ""
                  }`}
                >
                  Kurumsal
                </Link>
                <Link
                  to="/#teklif"
                  className={`myLinkV ${
                    location.pathname === "/urunlerimiz" ? "activeLink" : ""
                  }`}
                >
                  Hizmetlerimiz
                </Link>

                <Link
                  to="/iletisim"
                  className={`myLinkV ${
                    location.pathname === "/iletisim" ? "activeLink" : ""
                  }`}
                >
                  Iletisim
                </Link>
              </div>
              <p className="compNumber">0 442 237 21 22</p>
            </div>
          )}
        </nav>
      ) : (
        <nav className="navbar_Container">
          {isMobile ? (
            <>
            <div className="mobiliz">
                <div className="markaIsmiMobil">
                  <h1>Öz Aladağ Sigorta</h1>
                </div>
                <div
                  className="hamburger"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <FaTimes className="mobil_ikon" />
                  ) : (
                    <FaBars className="mobil_ikon" />
                  )}
                </div>
              </div>
              {menuOpen && (
                <div className="nav-links-mobile">
                <Link
                  to="/#ana"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/" ? "activeLink" : ""
                  }`}
                >
                  Anasayfa
                </Link>
                <Link
                  to="/kurumsal"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/kurumsal" ? "activeLink" : ""
                  }`}
                >
                  Kurumsal
                </Link>
                <Link
                  to="/#teklif"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/urunlerimiz" ? "activeLink" : ""
                  }`}
                >
                  Hizmetlerimiz
                </Link>

                <Link
                  to="/iletisim"
                  className={`myLinkV_Mobile ${
                    location.pathname === "/iletisim" ? "activeLink" : ""
                  }`}
                >
                  Iletisim
                </Link>
              </div>
              )}
            </>
          ) : (
            <div className="navbarS">
              <div className="navbar_Logo">
                <img src={SirketLogo} alt="" />
              </div>
              <div className="nav_links">
                <Link
                  to="/#ana"
                  className={`myLink ${
                    location.pathname === "/" ? "activeLink" : ""
                  }`}
                >
                  Anasayfa
                </Link>
                <Link
                  to="/kurumsal"
                  className={`myLink ${
                    location.pathname === "/kurumsal" ? "activeLink" : ""
                  }`}
                >
                  Kurumsal
                </Link>
                <Link
                  to="/#teklif"
                  className={`myLink ${
                    location.pathname === "/urunlerimiz" ? "activeLink" : ""
                  }`}
                >
                  Hizmetlerimiz
                </Link>

                <Link
                  to="/iletisim"
                  className={`myLinka ${
                    location.pathname === "/iletisim" ? "activeLink" : ""
                  }`}
                >
                  Iletisim
                </Link>
              </div>
              <p className="compNumber">0 442 237 21 22</p>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
