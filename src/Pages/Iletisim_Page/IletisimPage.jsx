import React from "react";
import "./iletisim_Page.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import L from "leaflet";

import navbarAlti from "../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";

const IletisimPage = () => {
  const position = [39.88423685820263, 41.257377892182355]; // Dükkânınızın enlem ve boylam değerleri
  const customIcon = new L.Icon({
    iconUrl: "/placeholder.png", // Buraya kendi simge URL'nizi ekleyin
    iconSize: [40, 40], // İkonun boyutu
    iconAnchor: [20, 40], // İkonun haritadaki nokta ile hizası
    popupAnchor: [0, -40], // Popup'ın hizası
  });

  // Harita container'ı için style objesini değişkenle tanımlayalım
  const mapContainerStyle = {
    width: window.innerWidth <= 768 ? "90%" : "400px",
    height: window.innerWidth <= 768 ? "300px" : "400px",
    border: "1px solid black",
    margin: window.innerWidth <= 768 ? "0 auto" : "0",
  };

  return (
    <>
      <div className="vakalar_container">
        <img src={navbarAlti} alt="Müşteri Vakaları" />
        <div className="blurred-overlay"></div>
      </div>
      <div className="ulas">
        <div className="adres_container">
          <h1>ÖZ -ALADAĞ SİGORTA ARACILIK HİZMETLERİ <br /> LTD. ŞTİ.</h1>
          <h1>Adres: </h1>
          <p>
          <FaLocationDot className="icon"/> Adres: Adnan Menderes Mah Yavuz Sultan Selim Bulvarı No.101 Palandöken/ERZURUM
          </p>
          <p>
          <FaPhone className="icon"/> Telefon: 0442 237 21 22
          </p>
          <p>
          <FaWhatsapp className="icon"/> 0554 009 25 36
          </p>
          <p>
          <FaWhatsapp className="icon"/> 0536 266 25 49
          </p>
          <p>
          <FaWhatsapp className="icon"/> 0542 394 25 36
          </p>
          <p>
          <IoMailSharp className="icon"/> ozaladagsigorta@ozaladagsigorta.com.tr
          </p>
           
          

        </div>
        <div style={mapContainerStyle}>
          <MapContainer
            center={position}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Öz Aladağ Sigorta</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default IletisimPage;
