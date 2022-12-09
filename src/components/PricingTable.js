import Table from "react-bootstrap/Table";
import "../assets/css/compontents/pricingTable.css";
export default function Piercings() {
  return (
    <div className="priceBackground">
      <div className="tableContainer">
        <table className="table table-hover tablePrices table-striped transparent">
          <thead className="centerName table">
            <tr className="piercingHeader">
              <th scope="col">Piercing</th>
              <th scope="col">Prices</th>
            </tr>
          </thead>
          <tbody className="centerName">
            <tr>
              <th scope="row">Dermal</th>
              <td>$120 | $75 each aditional</td>
            </tr>
            <tr>
              <th scope="row">Nostrils Any Positioning</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Ear Lobes</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">All Inner Ear Cartilidge</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">All Outer Ear Cartilidge</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Industrial</th>
              <td>$100+</td>
            </tr>
            <tr>
              <th scope="row">All Single Lip</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Septum</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Nipples</th>
              <td>$120+</td>
            </tr>
            <tr>
              <th scope="row">Genital</th>
              <td>$120+</td>
            </tr>
            <tr>
              <th scope="row">Bridge</th>
              <td>$100+</td>
            </tr>
            <tr>
              <th scope="row">Eyebrow</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Tougne</th>
              <td>$100+</td>
            </tr>
            <tr>
              <th scope="row">Navel</th>
              <td>$100+</td>
            </tr>
            <tr>
              <th scope="row">Dimples for the Pair</th>
              <td>$180+</td>
            </tr>
            <tr>
              <th scope="row">Dahlias for the Pair</th>
              <td>$160+</td>
            </tr>
            <tr>
              <th scope="row">Filtrum / Medusa</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Smiley</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Gauge Sizing & Streatching</th>
              <td>$40+ </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pricingInfo">
        <p>
          {" "}
          We do minor piercings with guardian permission. Check out our policy
          to go in depth
        </p>
        <p>
          All prices include include piercing and jerlwery with a piece of pure
          implant grade Titanimum
        </p>
        <p> Each price only includes the piercing, not the jewlery after</p>
        <p>* All prices are subject to vary *</p>
      </div>
    </div>
  );
}
