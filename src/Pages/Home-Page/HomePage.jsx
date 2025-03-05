import React, { useEffect, useRef, useState } from "react";
import Genel from "../../Öz Aladağ Sigorta/Tasarımlar/homePAge1.jpg";
import GenelMobil from "../../Öz Aladağ Sigorta/Tasarımlar/MobılHomePage.jpg";
import KampanyaGorsel from "../../Öz Aladağ Sigorta/Tasarımlar/buyukKampnaya.png";

import dask from "../../Öz Aladağ Sigorta/KartV2/IMG-20250108-WA0036.jpg";
import saglik from "../../Öz Aladağ Sigorta/KartV2/IMG-20250108-WA0037.jpg";
import seyahat from "../../Öz Aladağ Sigorta/KartV2/IMG-20250108-WA0038.jpg";
import trafik from "../../Öz Aladağ Sigorta/KartV2/IMG-20250108-WA0039.jpg";
import konut from "../../Öz Aladağ Sigorta/KartV2/IMG-20250108-WA0040.jpg";
import kasko from "../../Öz Aladağ Sigorta/KartV2/IMG-20250108-WA0041.jpg";

 
import AkSigorta from "../../Öz Aladağ Sigorta/Görseller/AkSigorta.png";
import Allians from "../../Öz Aladağ Sigorta/Görseller/Allianz.png";
import Anadolu from "../../Öz Aladağ Sigorta/Görseller/Anadolu.png";
import Hdi from "../../Öz Aladağ Sigorta/Görseller/Hdi.png";
import Ray from "../../Öz Aladağ Sigorta/Görseller/Ray.png";
import Sompo from "../../Öz Aladağ Sigorta/Görseller/Sompo.png";
import Tarsim from "../../Öz Aladağ Sigorta/Görseller/Tarsim.png";
import TurkNipp from "../../Öz Aladağ Sigorta/Görseller/TurkNipp.png";
import Turkiye from "../../Öz Aladağ Sigorta/Görseller/Turkiye.png";
import Zurich from "../../Öz Aladağ Sigorta/Görseller/Zurich.png";
import Aveon from "../../Öz Aladağ Sigorta/Görseller/Aveon.png";
import Axa from "../../Öz Aladağ Sigorta/Görseller/axaSigorta.jpg";
import Neova from "../../Öz Aladağ Sigorta/Görseller/Neova.png";
import Quick from "../../Öz Aladağ Sigorta/Görseller/Quick.png";
import Uni from "../../Öz Aladağ Sigorta/Görseller/Unico.png";
import Arex from "../../Öz Aladağ Sigorta/Görseller/Arex.png";
import Corpus from "../../Öz Aladağ Sigorta/Görseller/Corpus.png";
import Doga from "../../Öz Aladağ Sigorta/Görseller/Doga.png";
import Hepiyi from "../../Öz Aladağ Sigorta/Görseller/Hepiyi.jpg";
import Madge from "../../Öz Aladağ Sigorta/Görseller/Madgeburger.png";

import Guvenirlik from "../../Öz Aladağ Sigorta/Kartlar/Paragraf metniniz (14).png";
import Kapsamlı from "../../Öz Aladağ Sigorta/Kartlar/Paragraf metniniz (15).png";
import Etkili from "../../Öz Aladağ Sigorta/Kartlar/Paragraf metniniz (16).png";
import Planlar from "../../Öz Aladağ Sigorta/Kartlar/Paragraf metniniz (17).png";
import Avantajlı from "../../Öz Aladağ Sigorta/Kartlar/Paragraf metniniz (18).png";
import Partner from "../../Öz Aladağ Sigorta/Kartlar/Paragraf metniniz (19).png";



import "./home_page.css";
import { useLocation, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Dinamik rota navigasyonu
  };
  const teklifRef = useRef(null);
  const location = useLocation();
const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Hash kontrolü yapıyoruz
    if (location.hash) {
      const elementId = location.hash.substring(1); // "#" işaretini kaldırıyoruz
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  const handleScrollToTeklif = () => {
    teklifRef.current?.scrollIntoView({ behavior: "smooth" });
  };
useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div id="ana" className="container">
      {isMobile ? (
        <>
<div className="backImage">
        <img src={GenelMobil} alt="" />
      </div>
      <div className="teklif_Container">
        <div className="basliklar">
          <p>ÖZ-ALADAĞ SİGORTA SAĞLADIĞIMIZ HİZMETLER</p>
        </div>
        <div className="hizmetler">
          <ul>
            <li>Trafik Sigortasi</li>
            <li>Kasko Sigortasi</li>
            <li>Konut Sigortasi</li>
            <li>Tamamlayici Saglik Sigortasi</li>
            <li>Dask Sigortasi</li>
            <li>Seyahat Sigortasi</li>
          </ul>
        </div>
        <div className="teklif_buton">
          <button onClick={handleScrollToTeklif}>TEKLİF AL</button>
        </div>
      </div>
      <div className="teklifBaslik">
        <h1>Anlaşmalı Şirketlerimiz</h1>
      </div>
      <div className="anlasmali_Sirketler">
        <div className="sirketLogololari">
          <div className="sirketimg">
            <a 
              href="https://www.aksigorta.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AkSigorta} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.allianz.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Allians} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.anadolusigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Anadolu} alt="" />
            </a>
          </div>
          
          <div className="sirketimg">
            <a href="https://www.axasigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Axa} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://corpussigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Corpus} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.dogasigorta.com/" target="_blank" rel="noopener noreferrer">
              <img src={Doga} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.hdisigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Hdi} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://hepiyi.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Hepiyi} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.magdeburger.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Madge} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.neova.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Neova} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.quicksigorta.com/" target="_blank" rel="noopener noreferrer">
              <img src={Quick} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.raysigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Ray} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.somposigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Sompo} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.tarsim.gov.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Tarsim} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.turkiyesigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Turkiye} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.turknippon.com/tr" target="_blank" rel="noopener noreferrer">
              <img src={TurkNipp} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.unicosigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Uni} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.zurichsigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Zurich} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div ref={teklifRef} id="teklif" className="teklifBaslik">
        <h1>Size Nasıl Yardımcı Olabiliriz ?</h1>
      </div>
      <div className="teklif">
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={trafik} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/trafik")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={kasko} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/kasko")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={konut} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/konut")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={saglik} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/saglik")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={dask} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/dask")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={seyahat} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/seyahat")}>Teklif Al</button>
          </div>
        </div>
      </div>
      <div className="teklifBaslik">
        <h1>Neden Bizimle Çalışmalısınız ?</h1>
      </div>
      <div className="whyWorkContainer">
        <div className="whyWork">
          <div className="workCard">
            <img src={Guvenirlik} alt="" />
          </div>
          <div className="workCard">
            <img src={Kapsamlı} alt="" />
          </div>
          <div className="workCard">
            <img src={Etkili} alt="" />
          </div>
          <div className="workCard">
            <img src={Planlar} alt="" />
          </div>
          <div className="workCard">
            <img src={Avantajlı} alt="" />
          </div>
          <div className="workCard">
            <img src={Partner} alt="" />
          </div>
        </div>
      </div>
      <div className="kampanyaContainer">
          <div className="kampanyaContent">
            <div className="kampanyaResim">
              <img src={KampanyaGorsel} alt="Kampanya" />
            </div>
            <div className="kampanyaAciklama">
              <h2>Özel Kasko Kampanyası</h2>
              <p>Yılın en avantajlı kasko tekliflerini kaçırmayın! Öz Aladağ Sigorta'dan alacağınız kasko sigortanızda %25'e varan indirim fırsatı.</p>
              <button 
                className="kampanyaButton" 
                onClick={() => handleNavigate("/kampanya")}
              >
                Kampanya Detaylarına Git
              </button>
            </div>
          </div>
        </div>
        </>
      ) : (
        <>
        <div className="vakalar_container">
        
        <div className="blurred-overlay"></div>
      </div>
        <div className="backImage">
        <img src={Genel} alt="" />
      </div>
      <div className="teklif_Container">
        <div className="basliklar">
          <p>ÖZ-ALADAĞ SİGORTA SAĞLADIĞIMIZ HİZMETLER</p>
        </div>
        <div className="hizmetler">
          <ul>
            <li>Trafik Sigortasi</li>
            <li>Kasko Sigortasi</li>
            <li>Konut Sigortasi</li>
            <li>Tamamlayici Saglik Sigortasi</li>
            <li>Dask Sigortasi</li>
            <li>Seyahat Sigortasi</li>
          </ul>
        </div>
        <div className="teklif_buton">
          <button onClick={handleScrollToTeklif}>TEKLİF AL</button>
        </div>
      </div>
      <div className="teklifBaslik">
        <h1>Anlaşmalı Şirketlerimiz</h1>
      </div>
      <div className="anlasmali_Sirketler">
        <div className="sirketLogololari">
          <div className="sirketimg">
            <a 
              href="https://www.aksigorta.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AkSigorta} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.allianz.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Allians} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.anadolusigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Anadolu} alt="" />
            </a>
          </div>
          
          
          <div className="sirketimg">
            <a href="https://www.axasigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Axa} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://corpussigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Corpus} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.dogasigorta.com/" target="_blank" rel="noopener noreferrer">
              <img src={Doga} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.hdisigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Hdi} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://hepiyi.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Hepiyi} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.magdeburger.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Madge} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.neova.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Neova} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.quicksigorta.com/" target="_blank" rel="noopener noreferrer">
              <img src={Quick} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.raysigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Ray} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.somposigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Sompo} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.tarsim.gov.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Tarsim} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.turkiyesigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Turkiye} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.turknippon.com/tr" target="_blank" rel="noopener noreferrer">
              <img src={TurkNipp} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.unicosigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Uni} alt="" />
            </a>
          </div>
          <div className="sirketimg">
            <a href="https://www.zurichsigorta.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src={Zurich} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div ref={teklifRef} id="teklif" className="teklifBaslik">
        <h1>Size Nasıl Yardımcı Olabiliriz ?</h1>
      </div>
      <div className="teklif">
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={trafik} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/trafik")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={kasko} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/kasko")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={konut} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/konut")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={saglik} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/saglik")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={dask} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/dask")}>Teklif Al</button>
          </div>
        </div>
        <div className="teklifContainer">
          <div className="teklifKutu">
            <div className="teklifImage">
              <img src={seyahat} alt="" />
            </div>
          </div>
          <div className="teklifButon">
            <button onClick={() => handleNavigate("/seyahat")}>Teklif Al</button>
          </div>
        </div>
      </div>
      <div className="teklifBaslik">
        <h1>Neden Bizimle Çalışmalısınız ?</h1>
      </div>
      <div className="whyWorkContainer">
        <div className="whyWork">
          <div className="workCard">
            <img src={Guvenirlik} alt="" />
          </div>
          <div className="workCard">
            <img src={Kapsamlı} alt="" />
          </div>
          <div className="workCard">
            <img src={Etkili} alt="" />
          </div>
          <div className="workCard">
            <img src={Planlar} alt="" />
          </div>
          <div className="workCard">
            <img src={Avantajlı} alt="" />
          </div>
          <div className="workCard">
            <img src={Partner} alt="" />
          </div>
        </div>
      </div>
        <div className="kampanyaContainer">
          <div className="kampanyaContent">
            <div className="kampanyaResim">
              <img src={KampanyaGorsel} alt="Kampanya" />
            </div>
            <div className="kampanyaAciklama">
              <h2>Şimdi Öz Aladağ Sigorta'dan Sigorta Yaptırmanın Tam Zamanı! <br />
              Üstelik 1.000 TL Migros hediye ile bu fırsatı kaçırmayın.</h2>
              <p>Sizlere özel bir teklifimiz var! Öz Aladağ Sigorta ile sigortanızı
          yaptırın, tüm sigortalarda avantajlı teklif ve 1.000 TL'ye kadar
          Migros Hediye Çeki kazanın. Alışveriş
          giderlerinizde büyük tasarruf sağlayın. İşte detaylar:.</p>
              <button 
                className="kampanyaButton" 
                onClick={() => handleNavigate("/kampanya")}
              >
                Kampanya Detaylarına Git
              </button>
            </div>
          </div>
        </div>
        </>
      )}
      
    </div>
  );
};

export default HomePage;
