import React, { useRef } from "react";
import "./seyahatsigortasi.css";
import emailjs from "@emailjs/browser";

import customers from "../../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";

const SeyahatSigortasi = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    // Form verilerini al
    const formData = new FormData(form.current);

    // Eşya teminatı durumunu formData'ya ekle
    

    // FormData'yı object'e çevir
    const formObject = Object.fromEntries(formData.entries());

    emailjs
      .send(process.env.DASK_EMAILJS_SERVICE_ID, process.env.DASK_EMAILJS_TEMPLATE_ID, formObject, {
        publicKey: process.env.DASK_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert(
            "E-Posta Başarıyla gönderildi. Tarafınıza geri dönüş sağlanacaktır."
          );
          form.current.reset();
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
            <p className="offerTitle">Seyahat Sigortasi</p>
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
                name="tc_NoS"
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Doğum Tarihiniz:</p>
              <input
                type="date"
                className="inputb date-input"
                name="dogum_tarihS"
                max={new Date().toISOString().split("T")[0]}
                placeholder="GG/AA/YYYY"
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Telefon No:</p>
              <input
                type="text"
                className="inputb"
                name="telefon_noS"
                placeholder="0___ ___ __ __"
              />
            </div>
            <div className="ininin">
              <p className="inputTitle">Mesajınız (İsteğe Bağlı)</p>
              <textarea
                type="text"
                className="inputb"
                name="mesajinizS"
                placeholder="Ek olarak bilgi vermek isterseniz buraya yazabilirsiniz."
              />
            </div>
          </div>
        </div>

        <div className="getAnOffer_right">
          <div className="inputContainer">
          <div className="ininin">
              <p className="inputTitle">Kaç Günlük Seyahat İstiyorsunuz: </p>

              <input
                type="number"
                placeholder="Örneğin: 10"
                className="inputb"
                name="seyahat_gunu"
              />
            </div>
            <div className="ininin">
              <p className="inputTitle">Nereye Gidileceksiniz: </p>

              <input
                type="text"
                placeholder="Örneğin: İstanbul" 
                className="inputb"
                name="nereye_gideceksinizS"
              />
            </div>
            <div className="sifir-arac-bilgileri">
              <div className="ininin">
                <p className="inputTitle">Başlangıç Tarihiniz:</p>
                <input
                  type="date"
                  className="inputb date-input"
                  name="baslangic_TarihS"
                  max={new Date().toISOString().split("T")[0]}
                  placeholder="GG/AA/YYYY"
                />
              </div>
              <div className="ininin">
                <p className="inputTitle">Bitiş Tarihiniz:</p>
                <input
                  type="date"
                  className="inputb date-input"
                  name="bitis_TarihS"
                  max={new Date().toISOString().split("T")[0]}
                  placeholder="GG/AA/YYYY"
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

export default SeyahatSigortasi;
