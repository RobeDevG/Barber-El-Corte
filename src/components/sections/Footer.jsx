import './Footer.css'
import Hojas from '../../assets/Hojas.png'
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>Developed by:Roberto Gonzalez</p>
        <p>Designed by: Yoel </p>
        <img className='hojas' src={Hojas} alt="" />
        <img className='hojas-reverse' src={Hojas} alt="" />
      </div>

    </footer>
  )
}

export default Footer