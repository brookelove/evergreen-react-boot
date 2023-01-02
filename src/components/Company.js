import tawapa from "../assets/images/companies/TAWAPA-GOLD-LOGO_black_transparent-background.png";
import invictus from "../assets/images/companies/Invictus.jpeg";
import "../assets/css/compontents/companies.css";

export default function Company() {
  return (
    <div className="companyContainer">
      <h1 className="centerName subTitle">Jewelry Manufactures</h1>
      <div className="companyBox">
        <section>
          <a href="https://invictusbodyjewelry.com/" target={"_blank"}>
            <img src={invictus} className="companyLogo" />
          </a>
          {/* <p>Invictus</p> */}
        </section>
        <section>
          <a href="https://junipurrjewelry.com/" target={"_blank"}>
            <img className="companyLogo" />
          </a>
          <p>Junipurr</p>
        </section>
        <section>
          <a href="https://regalia.jewelry/" target={"_blank"}>
            <img className="companyLogo" />
          </a>
          <p>Regalia</p>
        </section>
        <section>
          <a href="https://www.neometal.com/" target={"_blank"}>
            <img className="companyLogo" />
          </a>
          <p>Neo Metal</p>
        </section>
        <section>
          <a href="https://www.tawapa.com/" target={"_blank"}>
            <img src={tawapa} className="companyLogo" />
          </a>
          {/* <p>Tawapa</p> */}
        </section>
      </div>
    </div>
  );
}
