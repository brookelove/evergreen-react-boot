import "../assets/css/compontents/Footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="footerContainer" variant="dark">
        <ul className="quickLinks">
          <li>
            <a href="https://www.google.com/maps/dir//evergreen+body+mod/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x5490ffa8b52de03b:0x978a7663f745c8b7?sa=X&ved=2ahUKEwjUmO-Eqrf7AhVYIDQIHfe8CzgQ9Rd6BAhVEAU">
              106 W Meeker, Puyallup, WA 98371
            </a>
          </li>
          <li>
            <a href="tel:2532567912">(253) 256-7912</a>
          </li>
          <li>
            <a href="mailTo:evergreenbodymod@gmail.com">
              evergreenbodymod@gmail.com
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
