import InputWithTitleAbove from '../InputWithTitleAbove'
import TitleAndOptions from '../TitleAndOptions'
import Button from '../../Button'
import './RegisterPageBody.css'

const RegisterPage = () => {
    return (
        <div className='register-page-container'>
            <h1>Cadastro Metereológico</h1>
            <div className='city-and-date'>
                <InputWithTitleAbove title='Cidade' width='300px' />
                <div className='register-date'>
                    <InputWithTitleAbove title='Data' width='180px' />
                </div>
            </div>
            <div className='register-info-container'>
                <div className='forecast-selector'>
                    <TitleAndOptions title='Tempo' option1={'Limpo'} option2={'Tempestade'} />
                </div>
                <div className='shift-selector'>
                    <TitleAndOptions title='Turno' option1={'Manhã'} option2={'Noite'} />
                </div>
                <div className='maxtemperature-and-precipitation'>
                    <div className='max-temperature-input'>
                        <InputWithTitleAbove title='Temperatura Máxima' width='54px' />
                    </div>
                    <div className='precipitation-input'>
                        <InputWithTitleAbove title='Precipitação' width='54px' />
                    </div>
                </div>
                <div className='humidity-input'>
                    <InputWithTitleAbove title='Umidade' width='54px' />
                </div>
                <div className='mintemperature-and-airspeed'>
                    <div className='min-temperature-input'>
                        <InputWithTitleAbove title='Temperatura Mínima' width='54px' />
                    </div>
                    <div className='air-speed-input'>
                        <InputWithTitleAbove title='Velocidade do vento' width='54px' />
                    </div>
                </div>
            </div>

            <div className='register-page-buttons'>
                <div className='register-page-button'>
                    <Button>Cancelar</Button>
                    <Button>Salvar</Button>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage