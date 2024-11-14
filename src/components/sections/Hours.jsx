
import './Hours.css'
import { useTranslation } from 'react-i18next'
function Hours() {

    const [t] = useTranslation("global")

    return (
        <div>
            <div className='Hours-movile'>
                <h1>{t("Abautme.hours")}</h1>
                <p>{t("Abautme.Monday")}</p>
                <p>{t("Abautme.Tuesday")}</p>
                <p>{t("Abautme.Wednesday")}</p>
                <p>{t("Abautme.Thursday")}</p>
                <p>{t("Abautme.Friday")}</p>
                <p>{t("Abautme.Saturday")}</p>
            </div>
        </div>
    )
}

export default Hours