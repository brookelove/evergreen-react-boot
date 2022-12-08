import "../assets/css/compontents/hours.css";
export default function Hours() {
  return (
    <div className="hoursOpen">
      <h3 className="hourTitle">Hours</h3>
      <span className="line"></span>
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
          <p className="hourRight ">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourLeft">Friday</p>
          <p className="hourRight">10AM - 6PM</p>
        </div>
        <div className="gridItem">
          <p className="hourLeft">Saturday</p>
          <p className="hourRight">10AM - 6PM</p>
        </div>
      </ul>
      <p className="centerName">*Holidays might affect these hours*</p>
    </div>
  );
}
