import './Body.css'
import TextField from '../TextField'

function Body(props) {
    return (
        <div className='body-container'>
            <div className='search-city'>
                <span>Pesquise a cidade</span>
                <TextField></TextField>
            </div>
            <span className='today'>Hoje</span>
            <div className='weather-today'></div>
            <div className='image-container'>
                <img src="src/images/cloudy-weather.png" alt="imagem do tempo" className='cloud-image' />
                <img src="src/images/umbrella.png" alt="precipitação" className='umbrella-image' />
                <img src="src/images/drop.png" alt="umidade do ar" className='drop-image' />
                <img src="src/images/air.png" alt="velocidade do vento" className='air-image' />
            </div>
        </div>
    )
}

export default Body;
