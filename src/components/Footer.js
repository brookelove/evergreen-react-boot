import "../assets/css/compontents/Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footerContainer">
        <ul className="quickLinks">
          <li>
            <a>Address</a>
          </li>
          <li>
            <a>Phone</a>
          </li>
          <li>
            <a>Email</a>
          </li>
        </ul>
        <div>
          <p>Evergren Body Mod</p>
          <p>© All Rights Reserved</p>
        </div>
        <a> ^ Back to Top </a>
      </footer>
    </div>
  );
}
