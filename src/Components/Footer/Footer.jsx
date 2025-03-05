import React from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import FootLogo from "../../Öz Aladağ Sigorta/Görseller/logoFoota.png";

import qr from "../../Öz Aladağ Sigorta/Tasarımlar/qrSon.jpg";
const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerSection1">
          <img src={FootLogo} alt="" />
          <div className="numberFoot">
          <BsFillTelephoneFill className="footIcon" />
            <p className="number">
              
              0554 009 25 36
            </p>
            <p className="number">
              
              0536 266 25 49
            </p>

            <p className="number">
              {" "}
              
              0542 394 25 36
            </p>
          </div>
        </div>
        <div className="footerSection2">
          <p className="footBaslik">HİZMETLERİMİZ</p>
          <ul>
            <li>Trafik Sigortası</li>
            <li>Kasko Sigortası</li>
            <li>Konut Sigortası</li>
            <li>Tamamlayıcı Sağlık Sigortası</li>
            <li>DASK Sigortası</li>
            <li>Seyahat Sigortası</li>
          </ul>
        </div>
        <div className="footerSection3">
          <p className="footBaslik">İLETİŞİM BİLGİLERİ</p>
          <ul>
            <li>info@ozaladagsigorta.com.tr</li>
            <li>Adnan Menderes Mah Yavuz Sultan Selim Bulvarı No.101 Palandöken/ERZURUM </li>
            <li>0 442 237 21 22</li>
          </ul>
        </div>
        <div className="footerSection4">
          <img src={qr} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
