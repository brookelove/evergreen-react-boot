import "../assets/css/pages/prices.css";
import PricingTable from "../components/PricingTable";

import Company from "../components/Company";
export default function Piercings() {
  return (
    <div>
      <PricingTable />
      <Company />
      <h1>Companies We Work With</h1>
      <section>
        <a>
          <img />
        </a>
        <p>Invictus</p>
      </section>
      <section>
        <a>
          <img />
        </a>
        <p>Tawapa</p>
      </section>
      <section>
        <a>
          <img />
        </a>
        <p>Junipurr</p>
      </section>
      <section>
        <a>
          <img />
        </a>
        <p>Teather</p>
      </section>
      <section>
        <a>
          <img />
        </a>
        <p>Regalia</p>
      </section>
    </div>
  );
}
