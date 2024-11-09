import BabyFace from '../../assets/Baby Face.png'
import Blade from '../../assets/Blade.png'
import FashionTrend from '../../assets/Fashion Trend.png'
import Scissors from '../../assets/Scissors.png'

function OurServices() {
    return (
        <section className='section-container'>
            <div className='img-home'>
                <div>
                    <img src={Scissors} alt="" />
                    <p>Cortes de Pelo Normal</p>
                </div>
                <div>
                    <img src={FashionTrend} alt="" />
                    <p>Tratamientos Faciales Para Hombres</p>
                </div>
                <div>
                    <img src={Blade} alt="" />
                    <p>Afeitado Real</p>
                </div>
                <div>
                    <img src={BabyFace} alt="" />
                    <p>Corte de Pelo Para Niños</p>
                </div>
            </div>
        </section>
    )
}

export default OurServices