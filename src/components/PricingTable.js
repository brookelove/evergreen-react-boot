import "../assets/css/compontents/pricingTable.css";
import Companies from "../components/Company";
export default function Piercings() {
  return (
    <div className="priceBackground">
      <h1 className="centerName">Piercing Prices</h1>
      <div className="tableContainer">
        <table class="table table-hover tablePrices transparent">
          <thead class="centerName table">
            <tr>
              <th scope="col">Piercing</th>
              <th scope="col">Prices</th>
            </tr>
          </thead>
          <tbody class="centerName">
            <tr>
              <th scope="row">Dermal</th>
              <td>$100 | $50 each aditional</td>
            </tr>
            <tr>
              <th scope="row">Nostril</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">All Inner Ear Cartilidge</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Ear Lobes</th>
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
              <th scope="row">All Lip</th>
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
          </tbody>
        </table>
      </div>
      <p> Each price only includes the piercing, not the jewlery after</p>
      <p>* All prices are subject to vary *</p>
      <Companies />
    </div>
  );
}
