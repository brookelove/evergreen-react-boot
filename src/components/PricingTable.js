import "../assets/css/compontents/pricingTable.css";
export default function Piercings() {
  return (
    <div className="priceBackground">
      <h1 className="centerName galleryTitle">Prices</h1>
      <div className="tableContainer">
        <table class="table table-hover tablePrices transparent">
          <thead class="centerName table tableHeader">
            <tr>
              <th scope="col">Piercing</th>
              <th scope="col">Prices</th>
            </tr>
          </thead>
          <br />
          <tbody class="centerName">
            <h6 className="miniHeader">Ears</h6>
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
            <h6 className="miniHeader">Facial</h6>
            <tr>
              <th scope="row">All Single Lip</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Bridge</th>
              <td>$100+</td>
            </tr>
            <tr>
              <th scope="row">Nostril</th>
              <td>$80+</td>
            </tr>
            <tr>
              <th scope="row">Septum</th>
              <td>$80+</td>
            </tr>
            <h6 className="miniHeader">Body</h6>
            <tr>
              <th scope="row">Dermal</th>
              <td>$120 | $75 each aditional</td>
            </tr>
            <tr>
              <th scope="row">Nipples</th>
              <td>$120+</td>
            </tr>
            <tr>
              <th scope="row">Genital</th>
              <td>$120+</td>
            </tr>

            {/* <tr>
              <th scope="row">Genital</th>
              <td>$120+</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="pricingNotes">
        <p> Each price only includes the piercing, not the jewlery after.</p>
        <p>*All prices are subject to vary*</p>
      </div>
    </div>
  );
}
