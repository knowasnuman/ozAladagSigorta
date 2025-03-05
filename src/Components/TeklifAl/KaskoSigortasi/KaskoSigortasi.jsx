import React, { useRef, useState } from "react";
import "./kaskoSigortasi.css";
import emailjs from "@emailjs/browser";


import customers from "../../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";


const KaskoSigortasi = () => {
  const [customerType, setCustomerType] = useState("şahıs");
  const [isNewCar, setIsNewCar] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Form verilerini al
    const formData = new FormData(form.current);
    
    // Checkbox değerini "Evet" veya "Hayır" olarak ayarla
    formData.set('is_new_carK', isNewCar ? 'Evet' : 'Hayır');

    // FormData'yı object'e çevir
    const formObject = Object.fromEntries(formData.entries());

    emailjs
      .send(
        process.env.DASK_EMAILJS_SERVICE_ID,
        process.env.KASKO_EMAILJS_TEMPLATE_ID,
        formObject,
        {
          publicKey: process.env.DASK_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("E-Posta Başarıyla gönderildi. Tarafınıza geri dönüş sağlanacaktır.");
          form.current.reset();
          setIsNewCar(false);
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
      <form  ref={form} onSubmit={sendEmail} className="getAnOfferContainer">
        <div className="getAnOffer_left">
          <div className="offerTitleContainer">
            <p className="offerTitle">Kasko Sigortasi</p>
            
          </div>
          
          <div className="checkFor">
            <label className="labelFlex">
              Şahıs
              <input
                type="radio"
                name="customer_typeK"
                value="şahıs"
                checked={customerType === "şahıs"}
                onChange={(e) => setCustomerType(e.target.value)}
              />
            </label>
            <label className="labelFlex">
              Şirket
              <input
                type="radio"
                name="customer_typeK"
                value="şirket"
                checked={customerType === "şirket"}
                onChange={(e) => setCustomerType(e.target.value)}
              />
            </label>
          </div>

          <div className="inputContainer">
            {customerType === "şahıs" && (
              <div className="inininS">
                <p className="inputTitle">Tc Kimlik Numaranız: </p>
                <input
                  type="text"
                  placeholder="Tc Kimlik Numaranız"
                  className="inputb"
                  name="tc_noK"
                  
                />
              </div>
            )}
            {customerType === "şirket" && (
              <div className="inininS">
                <p className="inputTitle">Vergi Hesap Numaranız:</p>
                <input
                  type="text"
                  placeholder="Vergi Hesap Numaranız"
                  className="inputb"
                  name="vergi_noK"
                  
                />
              </div>
            )}
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
              <p className="inputTitle">Doğum Tarihiniz:</p>
              <input 
                type="date" 
                className="inputb date-input" 
                name="dogum_tarihK"
                max={new Date().toISOString().split('T')[0]}
                placeholder="GG/AA/YYYY"
               
              />
            </div>

            <div className="ininin">
              <p className="inputTitle">Telefon No:</p>
              <input
                type="text"
                className="inputb"
                name="telefon_noK"
                placeholder="0___ ___ __ __"
                
              />
            </div>
            <div className="ininin">
              <p className="inputTitle">Mesajınız (İsteğe Bağlı)</p>
              <textarea
                type="text"
                className="inputb"
                name="mesajinizK"
                placeholder="Ek olarak bilgi vermek isterseniz buraya yazabilirsiniz."
                
              />
            </div>

            
          </div>
        </div>

        <div className="getAnOffer_right">
          <div className="offerTitleContainerA">
            <p className="offerTitle">Araç Bilgileriniz</p>
          </div>

          <div className="inputContainer">
            <div className="ininina">
              <p className="inputTitle">Mesleğiniz:</p>
              <input
                type="text"
                className="inputb"
                name="meslekK"
                placeholder="Örenğin: Öğretmen"
                
              />
            </div>
            <div className="ininina">
              <p className="inputTitle">Aracınızın Plakası:</p>
              <input type="text" className="inputb" name="plakaK" />
            </div>
            <div className="ininina">
              <p className="inputTitle">Ruhsat Seri No:</p>
              <input
                type="text"
                className="inputb"
                name="ruhsat_seri_noK"
                placeholder="Örenğin: AB123456"
                
              />
            </div>

            <div className="checkFor" style={{ marginTop: "20px" }}>
              <label className="labelFlex">
                Aracım Sıfır
                <input
                  type="checkbox"
                  name="is_new_carK"
                  checked={isNewCar}
                  onChange={(e) => setIsNewCar(e.target.checked)}
                  value={isNewCar ? "Evet" : "Hayır"}
                />
              </label>
            </div>

            {isNewCar && (
              <div className="sifir-arac-bilgileri">
                <div className="ininina">
                  <p className="inputTitle">Fatura Yılı:</p>
                  <input
                    type="number"
                    className="inputb"
                    name="fatura_yiliK"
                    placeholder="Örneğin: 2024"
                    
                  />
                </div>
                
                <div className="ininina">
                  <p className="inputTitle">Motor Tipi:</p>
                  <input
                    type="text"
                    className="inputb"
                    name="motor_tipiK"
                    placeholder="Örneğin: 1.6 TDI"
                    
                  />
                </div>

                <div className="ininina">
                  <p className="inputTitle">Şasi Numarası:</p>
                  <input
                    type="text"
                    className="inputb"
                    name="sasi_noK"
                    placeholder="Şasi numarasını giriniz"
                    
                  />
                </div>

                <div className="ininina">
                  <p className="inputTitle">Araç Marka/Model:</p>
                  <input
                    type="text"
                    className="inputb"
                    name="arac_modelK"
                    placeholder="Örneğin: Volkswagen Passat"
                    
                  />
                </div>
                
              </div>
              
            )}
            <div className="teklifbuton">
              <input type="submit" value="TEKLIF AL" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KaskoSigortasi;
