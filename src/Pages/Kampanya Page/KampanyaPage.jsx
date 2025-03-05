import React from "react";
import "./kampanyaPage.css";
import KampanyaGorsel1 from "../../Öz Aladağ Sigorta/Tasarımlar/kucukKampanya.png";
import navbarAlti from "../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";

const KampanyaPage = () => {
  return (
    <div className="kampanyaPageContainer">
      <div className="vakalar_container">
        <img src={navbarAlti} alt="Müşteri Vakaları" />
        <div className="blurred-overlay"></div>
      </div>
      <div className="renkliBaslikContainer">
        <p className="rekliBaslik">
          Şimdi Öz Aladağ Sigorta'dan Sigorta Yaptırmanın Tam Zamanı! <br />
          Üstelik 1.000 TL Migras hediye ile bu fırsatı kaçırmayın.
        </p>
      </div>
      <div className="kampanyaDetay">
        <p className="dd">
          Sizlere özel bir teklifimiz var! Öz Aladağ Sigorta ile kasko sigortanızı
          yaptırın, tüm sigortalarınızda avantajlı teklif ve 1.000 TL'ye kadar
          Migros Hediye Çeki kazanın. Hem aracınız ve hem de alışveriş
          giderlerinizde büyük tasarruf sağlayın. İşte detaylar:
        </p>
        <div className="kampanyaImage">
          <img src={KampanyaGorsel1} alt="Kasko Kampanyası" />
        </div>
        <div className="kampanyaIcerik">
          <div className="kampanyaBilgi">
            <h2>Kampanya Avantajları:</h2>

            <ul>
              <li>
                <strong>Migros Hediye Çeki:</strong>
                <br />
                Öz Aladağ Sigorta'da online veya çağrı merkezi üzerinden kasko
                sigortanızı alarak 1.000 TL'ye varan Migros Hediye Çeki
                kazanabilirsiniz.
              </li>
              <li>
                <strong>
                  Trafik sigortasında sunulacak olan avantajlı tekliflerden
                  yararlanabilirsiniz.
                </strong>
              </li>
              
              <li>Detaylı bilgi için lütfen bizimle iletişime geçin</li>
            </ul>
            <h2>Kampanya Şartları:</h2>
            <ul>
            <li>
                
                <strong>Kampanya, sigorta poliçesinin iptal ettirilmeme şartıyla geçerli olmaktadır.</strong>
              </li>
              
              <li>
                <strong>Poliçe Prim Tabanlı Puanlar:</strong> <br />
                Kazanacağınız Migros Hediye çeki, poliçe priminizin değerine
                bağlı olarak belirlenmektedir. Detaylar için aşağıdaki tabloya
                göz atın.
              </li>
            </ul>
            <h2>Migros Hediye Çeki Detayları:</h2>
            <p className="bc">
              Sigorta poliçe tutarınıza istinaden aşağıdaki
              tutarlarda migros hediye çeki kazanabilirsiniz.
              <br />
              3000-9.999 arası poliçe primi için 200 TL,
              <br />
              10.000-14.999 arası için 400 TL,
              <br />
              15.000-19.999 arası için 600 TL,
              <br />
              20.000-29.999 arası için 800 TL,
              <br />
              30.000 TL ve üzeri için 1.000 TL Migros Hediye Çeki!
            </p>
            <h2>Önemli Notlar:</h2>
            <ul>
              <li>
                <strong>SMS Bildirimi:</strong> <br />
                Migros Hediye Çeki kodunuz sigortanızın aktif hale geldiği
                tarihten itibaren en geç 15 gün içinde SMS yoluyla
                bildirilecektir.
              </li>
              <li>
                <strong>Yenileme ve Koşullar:</strong> <br />
                Daha önce Öz Aladağ Sigorta'dan alınan poliçelerin yenilemeleri bu
                kampanya kapsamında değildir. Ayrıca, Öz Aladağ Sigorta kampanya
                koşullarında değişiklik yapma veya kampanyayı durdurma hakkını
                saklı tutar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KampanyaPage;
