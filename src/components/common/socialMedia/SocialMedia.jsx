import {
  faBehance,
  faDribbble,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faInstagram, link: "#!" },
  { icon: faPhone, link: "tel:+918160261124" },
  { icon: faWhatsapp, link: "https://wa.me/918160261124" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/tsmohitjain19" },
  { icon: faGithub, link: "https://github.com/mohitjain1911/" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
