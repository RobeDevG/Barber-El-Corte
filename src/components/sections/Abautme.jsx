import './Abautme.css'
import imagen1 from '../../assets/Component 1.png'
import barberprice from '../../assets/Barbeimg.png'

function Abautme() {
    return (
        <section className="Abautme">
            <div className='abautimg'>
                <img className='abautimg-1 negative' src={imagen1} height={606} width={538} alt="" />
                <div className='abautimg-1 rectangle'>
                    <h1>Horarios</h1>
                    <p>Lunes</p>
                    <p>Martes</p>
                    <p>Miercoles</p>
                    <p>Jueves</p>
                    <p>Viernes</p>
                    <p>Sabado</p>
                </div>
            </div>
            <p className='text-abaut'>Además hay 5 razones<br /> por las que los Hombres <br />prefieren la Barberia<br /> “El Corte”</p>
            <img className='barber' src={barberprice} alt="" />
        </section>
    )
}

export default Abautme