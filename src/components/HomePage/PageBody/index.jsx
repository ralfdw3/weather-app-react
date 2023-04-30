import './PageBody.css'

const PageBody = () => {

    return (
        <div className='body-container'>
            <span className='today'>Hoje</span>
            <div className='weather-today'>
                <section className='image-container'>
                    <img src="src/images/cloudy-weather.png" alt="imagem do tempo" className='cloud-image' />
                    <div className='small-icons'>
                        <img src="src/images/umbrella.png" alt="precipitação" className='umbrella-image' />
                        <img src="src/images/drop.png" alt="umidade do ar" className='drop-image' />
                        <img src="src/images/air.png" alt="velocidade do vento" className='air-image' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PageBody;
