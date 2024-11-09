import './Nav.css'
import Leprechaun from '../../assets/Leprechaun.png'
import Hojas from '../../assets/Hojas.png'
import Spain from '../../assets/Spain.png'
import USA from '../../assets/USA.png'
function Nav() {
    return (
        <nav className="nav-container">
            <div className='img-nav'>
                <img src={Hojas} alt="" />
                <img  src={Leprechaun} alt="" />
                <img className='rotate' src={Hojas} alt="" />
            </div>
            <input type="checkbox" id='idioma' className='check'/>
            <label className='esp-check apagado' htmlFor="idioma"><img src={Spain} alt="" /></label>
            <label className='esp-check encendido' htmlFor="idioma"><img src={USA} alt="" /></label>
        </nav>
    )
}

export default Nav