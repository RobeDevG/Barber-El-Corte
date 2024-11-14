
import './HaircutSection.css';
import cortes from '../../assets/cortes.png'
import cortes1 from '../../assets/cortes1.png'
import cortes2 from '../../assets/cortes2.png'
import cortes3 from '../../assets/cortes3.png'
import BarberScissors from '../../assets/Barber Scissors.png'
import StraightRazor from '../../assets/Straight Razor.png'
import { useTranslation } from 'react-i18next';


const HaircutSection = () => {

  const[t] = useTranslation("global")

  return (
    <section className="haircut-section" id='haircut-styles'>
      <h2>{t("HaircutSection.title")}</h2>
      <div className="images-container">
        <img className="image-placeholder" src={cortes} height='253px'
          width='auto' ></img>
        <img className="image-placeholder" src={cortes1} height='253px'
          width='auto'></img>
        <img className="image-placeholder" src={cortes2} height='253px'
          width='auto'></img>
        <img className="image-placeholder" src={cortes3} height='253px'
          width='auto'></img>
      </div>
      <img className='barber-position_1' src={BarberScissors} alt="" />
      <img className='barber-position_2' src={BarberScissors} alt="" />
      <img className='barber-position_3' src={StraightRazor} alt="" />
      <img className='barber-position_4' src={StraightRazor} alt="" />
    </section >
  );
};

export default HaircutSection;
