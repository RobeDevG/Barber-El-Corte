import { useTranslation } from 'react-i18next'
import BabyFace from '../../assets/Baby Face.png'
import Blade from '../../assets/Blade.png'
import FashionTrend from '../../assets/Fashion Trend.png'
import Scissors from '../../assets/Scissors.png'

function OurServices() {

    const[t] = useTranslation("global")
    
    return (
        <section className='section-container'>
            <div className='img-home'>
                <div>
                    <img src={Scissors} alt="" />
                    <p>{t("ourServices.text_1")}</p>
                </div>
                <div>
                    <img src={FashionTrend} alt="" />
                    <p>{t("ourServices.text_2")}</p>
                </div>
                <div>
                    <img src={Blade} alt="" />
                    <p>{t("ourServices.text_3")}</p>
                </div>
                <div>
                    <img src={BabyFace} alt="" />
                    <p>{t("ourServices.text_4")}</p>
                </div>
            </div>
        </section>
    )
}

export default OurServices