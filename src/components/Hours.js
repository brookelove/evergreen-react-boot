import "../assets/css/compontents/hours.css";
export default function Hours() {
  return (
    <div className="hoursOpen">
      <h1>Hours</h1>
      <ul className="gridContainer">
        <div className="gridItem">
          <p className="hourLeft">Sunday</p>
          <p className="hourRight">CLOSED</p>
        </div>
        <div className="gridItem">
          <p className="hourLeft">Monday</p>
          <p className="hourRight">CLOSED</p>
        </div>
        <div className="gridItem">
          <p className="hourLeft">Tuesday</p>
          <p className="hourRight">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourLeft">Wednesday</p>
          <p className="hourRight">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourLeft">Thursday</p>
          <p className="hourRight">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Friday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourInfoL">Saturday</p>
          <p className="hourInfoR">10AM - 6PM</p>
        </div>
      </ul>
    </div>
  );
}
