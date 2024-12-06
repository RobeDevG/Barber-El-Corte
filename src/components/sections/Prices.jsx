import { useTranslation } from 'react-i18next'

function Prices() {

  const[t] = useTranslation("global")

  return (
    <section className="prices" id='prices'>
      <h1>{t("Prices.title")}</h1>
      <div className="prices-container">
        <p><span>{t("Prices.text_1")}</span> : 250$</p>
        <p><span>{t("Prices.text_2")}</span> : 250$</p>
        <p><span>{t("Prices.text_3")}</span> : 150$</p>
        <p><span>{t("Prices.text_4")}</span> : 150$</p>
      </div>
      <a href="https://wa.me/5363901233" target="_blank" rel="noopener noreferrer">{t("Prices.btn")}</a>
    </section>
  )
}

export default Prices