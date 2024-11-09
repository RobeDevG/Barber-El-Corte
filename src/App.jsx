
import './App.css'
import homeimg from './assets/Homeimg.png'
import assets from './assets/Address.png'
import iPhone from './assets/iPhone SE.png'
import OurServices from './components/sections/OurServices'
import Abautme from './components/sections/Abautme'
import Prices from './components/sections/Prices'
import HaircutSection from './components/sections/HaircutSection'
import Contactanos from './components/sections/Contactanos'
import Footer from './components/sections/Footer'
import Nav from './components/sections/Nav'
function App() {

  return (
    <div>
      <header className="home section-container">
       <Nav/>
        <div className='home-content'>
          <div className='home-content_1'>
            <div className='text-home'>
              <h1>Bienvenido a</h1>
              <p className='text-home_2'>Barberia el Corte</p>
            </div>
            <div className='home-direction'>
              <img src={assets} alt="asd" />
              <p>Reparto Reinold Garcia </p>
            </div>
            <div className='home-direction'>
              <img src={iPhone} alt="" />
              <p>+53 58672669</p>
            </div>
          </div>
          <div>
            <img src={homeimg} alt="" width='auto' height={597} />
          </div>
        </div>

      </header>
      <OurServices />
      <Abautme />
      <Prices/>
      <HaircutSection/>
      <Contactanos/>
      <Footer/>
    </div>
  )
}

export default App
