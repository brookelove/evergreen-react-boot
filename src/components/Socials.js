import { FaFacebook, FaYelp, FaInstagramSquare } from "react-icons/fa";
import "../assets/css/compontents/socials.css";
export default function Socials() {
  return (
    <div className="googleWalkthoughBox">
      <div className="socialLinksBox">
        <h3 className="galleryTitle socialTitle">Check Us Out On</h3>
        <div className="socialIcons">
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="https://m.facebook.com/Evergreen-Body-Mod-110421318127572/?ref=py_c"
            rel="noreferrer"
            target={"_blank"}
          >
            {/* Facebook: Evergreen Body Mod */}
            <FaFacebook size="75px" color="rgb(34, 34, 34)" />
          </a>
          {/* put an image in here that shows the shop */}
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="https://www.instagram.com/mattjolly13/?hl=en"
            rel="noreferrer"
            target={"_blank"}
          >
            {/* Instagram: @mattjolly13 */}
            <FaInstagramSquare size="75px" color="rgb(34, 34, 34)" />
          </a>
          <a
            className="contactLinks hoverUnderlineAnimate"
            href="https://www.yelp.com/biz/evergreen-body-mod-puyallup"
            rel="noreferrer"
            target={"_blank"}
          >
            {/* Yelp: Evegreen Boy Mod */}
            <FaYelp size="75px" color="rgb(34, 34, 34)" />
          </a>
        </div>
      </div>
    </div>
  );
}
