import React from "react";
import "./kurumsal_Page.css";
import { TfiQuoteLeft } from "react-icons/tfi";
import { TfiQuoteRight } from "react-icons/tfi";
import navbarAlti from "../../Öz Aladağ Sigorta/Tasarımlar/abbe-sublett-nxZDMUQhN4o-unsplash.jpg";
const KurumsalPage = () => {
  return (
    <div className="kurumsalAna">
      <div className="vakalar_container">
        <img src={navbarAlti} alt="Müşteri Vakaları" />
        <div className="blurred-overlay"></div>
      </div>
      <section className="misyonumuz">
        <div className="icBolum">
          <h1>Misyonumuz</h1>
          <p> <TfiQuoteLeft className="quote"/> &nbsp;  Mesleğimizde en iyilerden olmak, bizden iyi meslektaşlarımızı
            kendimize rehber edinmek olacaktır. İyiden maksadımız daha çok
            poliçe tanzim etmek, yâda şirketimiz cirosunu şu rakamdan şu rakama
            çıkarmak değil; ana misyonumuz başta müşteri memnuniyeti olacaktır.
            Mesleğinde deneyimli dürüst, çalışkan, azimli, araştıran, üretken
            kaliteli ve kalifiyeli, çalışanlarımızla kusursuz denilecek ölçüde
            hizmet sunmak olacaktır. Sektörde referans gösterilen şirketler
            arasında yer almaktır. Şirketimiz sektördeki yeniliklere ayak
            uyduracak, sektör içerisinde fark ettiğimiz ve tüm camiamızı zan
            altında bırakacak her türlü haksız rekabete, kısaca yalana, dolana
            ve her türlü düzenbazlığa kalkan olup, hiçbir kanun ve yasa dışı
            teklife onay verilmeyecektir. Kurumsal olmaya özen gösterilecek
            sıradan değil sıra dışı bir şirket olmayı hedefleyecektir.<strong> ÖZ-ALADAĞ
            SİG. ARA. HİZ. LTD.ŞTİ’nin kurucusu Mükerrem Aladağ’ın</strong> gerek aile
            terbiyesi, gerek adaletin tecelli ettiği bir kurumdan gelen devlet
            terbiyesi ve gerekse de 1986 yılından itibaren Anadolu Hayat
            Emeklilik çalışanı olarak aldığı iş disiplinini şirketin tüm
            çalışanlarına da sirayet ettireceğimize başta çok değerli
            müşterilerimiz olmak üzere, bizimle iş yapan ortaklarımıza ve tüm
            çevremize söz veriyoruz. &nbsp;<TfiQuoteRight className="quote"/>
          </p>
        </div>
      </section>

      <section className="vizyonumuz">
        <div className="icBolum">
          <h1>Vizyonumuz</h1>
          <p> <TfiQuoteLeft className="quote"/>&nbsp; 2011 yılında Erzurum İl Merkezinde kurulan ÖZ-ALADAĞ SİG. ARA. HİZ.
            LTD.ŞTİ; ÖZ-Aladağ Sigorta İzmir Şubesi, ÖZ-Aladağ Sigorta Kars
            Şubesi ve ÖZ-Aladağ Sigorta Iğdır Şubeleri açarak sektörde kurumsal
            bir yapıya bürünmüştür. Kaliteli müşterilerimiz sayesinde hasar
            oranı en az olan sigorta acenteleri arasında yerini almıştır.
            Acentemiz Türkiye’yi genelinde poliçe tanzim etme imkânı ile her
            geçen gün verdiği hizmet kalitesini arttırmaya devam edecektir.&nbsp; <TfiQuoteRight className="quote"/>
          </p>
        </div>
      </section>

      <section className="ilkemiz">
        <div className="icBolum">
          <h1>Ilkemiz</h1>
          <p><TfiQuoteLeft className="quote"/>&nbsp;  Sigortacılık sektöründe gelişmeleri takip etmek, müşterilerimizin
            lehine olanları kendileriyle paylaşmak, bölge müdürlüklerimizin
            tamim ve talimleri doğrultusunda hareket etmek, ekip arkadaşlarımızı
            şirketimizin bir çalışanından ziyade; aile ferdi olarak kabul ederek
            onların tüm sıkıntılarına çözümler üretmek olacaktır.&nbsp; <TfiQuoteRight className="quote"/>
          </p>
        </div>
      </section>
    </div>
  );
};

export default KurumsalPage;
