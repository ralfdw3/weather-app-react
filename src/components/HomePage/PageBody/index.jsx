import './PageBody.css'

const PageBody = () => {

    return (
        <div className='body-container'>
            <span className='today'>Hoje</span>
            <div className='weather-today'>
                <img src="src/images/cloudy-weather.png" alt="imagem do tempo" className='cloud-image' />
                <div className='today-temperature'>
                    <span className='todays-max-temperature'>23</span>
                    <span className='max-degree'>°</span>
                    <span className='separation-between-temperature'>/</span>
                    <span className='todays-min-temperature'>17</span>
                    <span className='min-degree'>°</span>
                </div>
                <div className='small-icons'>
                    <div className='umbrella-container'>
                        <img src="src/images/umbrella.png" alt="precipitação" className='umbrella-image' />
                        <span className='percentage'>30%</span>
                        <span className='climate-data'>Precipitação</span>
                    </div>
                    <div className='drop-container'>
                        <img src="src/images/drop.png" alt="umidade do ar" className='drop-image' />
                        <span className='percentage'>20%</span>
                        <span className='climate-data'>Umidade</span>
                    </div>
                    <div className='air-container'>
                        <img src="src/images/air.png" alt="velocidade do vento" className='air-image' />
                        <span className='percentage'>9km/h</span>
                        <span className='climate-data'>Velocidade do vento</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBody;
