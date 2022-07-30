import React from "react";
import "./Footer.css";
import fb_icon from "../../assets/images/fb_icon.png";
import githubIcon from "../../assets/images/githubIcon.png";
import linkedinIcon from "../../assets/images/linkedinIcon.png";

function Footer() {
  return (
    <footer className="footer__items">
      <ul className="footer__menu">
        <li>
          <a href="https://www.facebook.com/asraful86255">
            <img src={fb_icon} alt="fb" height={30} width={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/ASRAF-UL">
            <img src={githubIcon} alt="github" height={30} width={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/asraful-islam-3460b6172/">
            <img src={linkedinIcon} alt="linkedin" height={30} width={30} />
          </a>
        </li>
      </ul>
      <h3 className="credit">
        &copy;Developed by <strong>Asraful Islam</strong>
      </h3>
    </footer>
  );
}

export default Footer;
