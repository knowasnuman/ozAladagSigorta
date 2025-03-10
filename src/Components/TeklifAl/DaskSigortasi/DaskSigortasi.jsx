import React, { useRef, useState } from "react";
import "./daskSigortasi.css";
import emailjs from "@emailjs/browser";

import customers from "../../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";

const DaskSigortasi = () => {
  const form = useRef();
  const [wantsEsyaTeminati, setWantsEsyaTeminati] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Form verilerini al
    const formData = new FormData(form.current);
    
    // Eşya teminatı durumunu formData'ya ekle
    formData.set('esya_teminatiD', wantsEsyaTeminati ? 'Evet, Eşya Teminatı İstiyor' : 'Hayır');

    // FormData'yı object'e çevir
    const formObject = Object.fromEntries(formData.entries());

    emailjs
      .send(

        process.env.DASK_EMAILJS_SERVICE_ID,
        process.env.DASK_EMAILJS_TEMPLATE_ID,
        formObject,
        {
          publicKey: process.env.DASK_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("E-Posta Başarıyla gönderildi. Tarafınıza geri dönüş sağlanacaktır.");
          form.current.reset();
          setWantsEsyaTeminati(false); // Formu resetlerken state'i de resetle
        },
        (error) => {
          alert("E-Posta Gönderilirken Bir Hata Oluştu. ozaladagsigorta.teklif@gmail.com adresine mail atarak teklif alabilirsiniz.", error.text);
        }
      );
  };

  return (
    <div className="concon">
      <div className="vakalar_container">
        <img src={customers} alt="Müşteri Vakaları" />
        <div className="blurred-overlay"></div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="getAnOfferContainer">
        <div className="getAnOffer_left">
          <div className="offerTitleContainer">
            <p className="offerTitle">Konut Sigortasi</p>
            
          </div>

          <div className="inputContainer">
          <div className="ininin">
              <p className="inputTitle">İsim Soyisim: </p>

              <input
                type="text"
                placeholder="Size hitap edecek isim soyisim"
                className="inputb"
                name="kisi_adi"
              />
            </div>
            <div className="ininin">
              <p className="inputTitle">Tc Kimlik Numaranız: </p>

              <input
                type="text"
                placeholder="Tc Kimlik Numaranız"
                className="inputb"
                name="tc_noD"
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Doğum Tarihiniz:</p>
              <input
                type="date"
                className="inputb date-input"
                name="dogum_tarihD"
                max={new Date().toISOString().split("T")[0]}
                placeholder="GG/AA/YYYY"
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Telefon No:</p>
              <input
                type="text"
                className="inputb"
                name="telefon_noD"
                placeholder="0___ ___ __ __"
              />
            </div>
            <div className="ininin">
              <p className="inputTitle">Mesajınız (İsteğe Bağlı)</p>
              <textarea
                type="text"
                className="inputb"
                name="mesajinizD"
                placeholder="Ek olarak bilgi vermek isterseniz buraya yazabilirsiniz."
              />
            </div>
          </div>
        </div>

        <div className="getAnOffer_right">
          <div className="inputContainer">
            <div className="ininin">
              <p className="inputTitle">Açık Adresiniz:</p>
              <textarea
                type="text"
                className="inputb"
                name="adresimD"
                placeholder="Örneğin: İstanbul/Kadıköy/Atatürk Mh. 123"
              />
            </div>

            <div className="sifir-arac-bilgileri">
              <div className="ininina">
                <p className="inputTitle">Bina Kaç Yılında İnşa Edildi:</p>
                <input
                  type="number"
                  className="inputb"
                  name="bina_yiliD"
                  placeholder="Örneğin: 2024"
                />
              </div>

              <div className="ininina">
                <p className="inputTitle">Bina Kaç Metrekare:</p>
                <input
                  type="text"
                  className="inputb"
                  name="bina_metrekareD"
                  placeholder="Örneğin: 100"
                />
              </div>

              <div className="ininina">
                <p className="inputTitle">Bina Kaç Katlı:</p>
                <input
                  type="text"
                  className="inputb"
                  name="bina_katD"
                  placeholder="Örneğin: 5"
                />
              </div>

              
            </div>
            <div className="checkFor" style={{ marginTop: "20px" }}>
              <label className="labelFlex">
                Eşya Teminatı İstiyorum.
                <input
                  type="checkbox"
                  name="esya_teminatiD"
                  checked={wantsEsyaTeminati}
                  onChange={(e) => setWantsEsyaTeminati(e.target.checked)}
                />
              </label>
            </div>

            <div className="teklifbuton">
              <input type="submit" value="TEKLIF AL" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DaskSigortasi;
