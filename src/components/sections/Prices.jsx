import { useTranslation } from 'react-i18next'
import './prices.css'

function Prices() {

  const[t] = useTranslation("global")

  return (
    <section className="prices">
      <h1>{t("Prices.title")}</h1>
      <div className="prices-container">
        <p><span>{t("Prices.text_1")}</span> : 300$</p>
        <p><span>{t("Prices.text_2")}</span> : 300$</p>
        <p><span>{t("Prices.text_3")}</span> : 300$</p>
        <p><span>{t("Prices.text_4")}</span> : 300$</p>
      </div>
      <a href="">{t("Prices.btn")}</a>
    </section>
  )
}

export default Prices