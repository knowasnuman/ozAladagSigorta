import React, { useRef } from "react";
import "./saglikSigortasi.css";
import emailjs from "@emailjs/browser";

import customers from "../../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";

const SaglikSigortasi = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    // Form verilerini al
    const formData = new FormData(form.current);
    
    // Eşya teminatı durumunu formData'ya ekle
    

    // FormData'yı object'e çevir
    const formObject = Object.fromEntries(formData.entries());

    emailjs
      .send(
        "service_0k6lqim",
        "template_01fl1bf",
        formObject,
        {
          publicKey: "SbqqmTEYmhshxwn2I",
        }
      )
      .then(
        () => {
          alert("E-Posta Başarıyla gönderildi. Tarafınıza geri dönüş sağlanacaktır.");
          form.current.reset();
          // Formu resetlerken state'i de resetle
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
            <p className="offerTitle">Saglik Sigortasi</p>
            
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
                name="tc_noQ"
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Doğum Tarihiniz:</p>
              <input
                type="date"
                className="inputb date-input"
                name="dogum_tarihQ"
                max={new Date().toISOString().split("T")[0]}
                placeholder="GG/AA/YYYY"
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Telefon No:</p>
              <input
                type="text"
                className="inputb"
                name="telefon_noQ"
                placeholder="0___ ___ __ __"
              />
            </div>
            <div className="ininin">
              <p className="inputTitle">Mesajınız (İsteğe Bağlı)</p>
              <textarea
                type="text"
                className="inputb"
                name="mesajinizQ"
                placeholder="Ek olarak bilgi vermek isterseniz buraya yazabilirsiniz."
              />
            </div>
          </div>
        </div>

        <div className="getAnOffer_right">
          <div className="inputContainer">
            <div className="ininina">
              <p className="inputTitle">Mesleğiniz:</p>
              <input
                type="text"
                className="inputb"
                name="meslekQ"
                placeholder="Örenğin: Öğretmen"
                
              />
            </div>

            <div className="sifir-arac-bilgileri">
              <div className="ininina">
                <p className="inputTitle">Boyunuz:</p>
                <input
                  type="number"
                  className="inputb"
                  name="boyQ"
                  placeholder="Örneğin: 178"
                />
              </div>

              <div className="ininina">
                <p className="inputTitle">Kilonuz:</p>
                <input
                  type="number"
                  className="inputb"
                  name="kiloQ"
                  placeholder="Örneğin: 70"
                />
              </div>

              

              
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

export default SaglikSigortasi;
