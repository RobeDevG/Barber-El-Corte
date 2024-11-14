import './Abautme.css'
import imagen1 from '../../assets/Component 1.png'
import barberprice from '../../assets/Barbeimg.png'
import { useTranslation } from 'react-i18next'

function Abautme() {

    const [t] = useTranslation("global")

    return (
        <section className="Abautme" id='about-me'>
            <div className='abautimg'>
                <img className='abautimg-1 negative' src={imagen1} height={"auto"} width={538} alt="" />
                <div className='abautimg-1 rectangle'>
                    <h1>{t("Abautme.hours")}</h1>
                    <p>{t("Abautme.Monday")}</p>
                    <p>{t("Abautme.Tuesday")}</p>
                    <p>{t("Abautme.Wednesday")}</p>
                    <p>{t("Abautme.Thursday")}</p>
                    <p>{t("Abautme.Friday")}</p>
                    <p>{t("Abautme.Saturday")}</p>
                </div>
            </div>
            <div className='conctainer-abaut'>
                <p className='text-abaut'>{t("Abautme.title")}</p>
                <div className='cards-container'>
                    <div className='cards'><p>{t("Abautme.card_1")}</p></div>
                    <div className='cards'><p>{t("Abautme.card_2")}</p></div>
                    <div className='cards'><p>{t("Abautme.card_3")}</p></div>
                    <div className='cards'><p>{t("Abautme.card_4")}</p></div>
                    <div className='cards'><p>{t("Abautme.card_5")}</p></div>
                </div>
            </div>

            <img className='barber' src={barberprice} alt="" />
        </section>
    )
}

export default Abautme