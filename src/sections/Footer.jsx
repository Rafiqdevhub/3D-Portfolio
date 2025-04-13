import { memo } from "react";
import { socialImgs } from "../constants";

const socialLinks = {
  insta: "https://instagram.com/rafiqdevhub",
  fb: "https://facebook.com/rafiqdevhub",
  x: "https://x.com/rafiqdevhub",
  linkedin: "https://linkedin.com/in/rafiqdevhub",
  github: "https://github.com/rafiqdevhub",
};

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              href={socialLinks[socialImg.name]}
              target="_blank"
              rel="noopener noreferrer"
              className="icon transition-transform hover:scale-110"
              aria-label={`Follow on ${socialImg.name}`}
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                loading="lazy"
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rafiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
