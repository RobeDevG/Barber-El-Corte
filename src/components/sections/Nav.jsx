import './Nav.css'
import Leprechaun from '../../assets/Leprechaun.png'
import Hojas from '../../assets/Hojas.png'
import Spain from '../../assets/Spain.png'
import USA from '../../assets/USA.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import FashionTrend11 from '../../assets/Fashion Trend11.png'
import Banknotes from '../../assets/Banknotes.png'
import Person from '../../assets/Person.png'
import Create from '../../assets/Create.png'

function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    const { i18n } = useTranslation("global")
    const [isChecked, setisChecked] = useState(false)

    const handelClick = ()=>{
        setIsOpen(!isOpen)
        setisChecked(!isChecked)
    }

    return (
        <nav>
            <section className="nav-container">

                <div className='img-nav'>
                    <img className='Hojas_1' src={Hojas} alt="" />
                    <img className='Leprechaun' src={Leprechaun} alt="" />
                    <img className='rotate Hojas_1' src={Hojas} alt="" />
                </div>
                <input type="checkbox" id='idioma' className='check' onChange={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")} />
                <label className='esp-check apagado' htmlFor="idioma" ><img src={Spain} alt="" /></label>
                <label className='esp-check encendido' htmlFor="idioma" ><img src={USA} alt="" /></label>

                <input type="checkbox" id="checkbox" checked={isChecked} onChange={() => {}}/>
                <label htmlFor="checkbox" className="toggle" onClick={()=>{handelClick()}}>
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>

            </section>
            <div className={`nav__menu-links ${isOpen && "open"}`}>
                <a href="#contact" className="nav__menu-link" id="sobreMi" onClick={()=>{handelClick()}}><img src={Create} alt="" /> Sacar cita</a>
                <a href="#about-me" className="nav__menu-link" id="proyectos" onClick={()=>{handelClick()}}><img src={Person} alt="" />Sobre Nosotros</a>
                <a href="#prices" className="nav__menu-link" id="habilidades" onClick={()=>{handelClick()}}><img src={Banknotes} alt="" />Precio</a>
                <a href="#haircut-styles" className="nav__menu-link" id="contactMe" onClick={()=>{handelClick()}}><img src={FashionTrend11} alt="" />Estilos</a>
            </div>
        </nav>
    )
}

export default Nav