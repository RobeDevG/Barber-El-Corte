
import './Contactanos.css';
import Instagram from '../../assets/Instagram (1).png'
import Facebook from '../../assets/Facebook.png'
import Group from '../../assets/Group 1.png'
import { useTranslation } from 'react-i18next';
const Contactanos = () => {

  const[t] = useTranslation("global")

  return (
    <div id='contact' className="contactanos">
      <h2>{t("Contact-us")}</h2>
      <div className="social-icons">
        <a href="https://www.instagram.com/raulprado52/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100055621749324" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="" />
        </a>
        <a href="https://wa.me/5363901233" target="_blank" rel="noopener noreferrer">
          <img src={Group} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contactanos;
