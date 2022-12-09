import "../assets/css/compontents/companies.css";
export default function Company() {
  return (
    <div className="companyContainer">
      <h1 className="centerName">Manufactures We Work With</h1>
      <div className="companyBox">
        <section>
          <a href="https://invictusbodyjewelry.com/" target={"_blank"}>
            <img />
          </a>
          <p>Invictus</p>
        </section>
        <section>
          <a href="https://www.tawapa.com/" target={"_blank"}>
            <img />
          </a>
          <p>Tawapa</p>
        </section>
        <section>
          <a href="https://junipurrjewelry.com/" target={"_blank"}>
            <img />
          </a>
          <p>Junipurr</p>
        </section>
        <section>
          <a href="https://regalia.jewelry/" target={"_blank"}>
            <img />
          </a>
          <p>Regalia</p>
        </section>
        <section>
          <a href="https://www.neometal.com/" target={"_blank"}>
            <img />
          </a>
          <p>Neo Metal</p>
        </section>
      </div>
    </div>
  );
}
