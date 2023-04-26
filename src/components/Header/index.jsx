import './Header.css'
import Button from '../Button'

function Header() {
    return (
        <header className='background'>
            <div className='button'>
                <Button>Home</Button>
                <Button>Cadastrar</Button>
                <Button>Listar</Button>
            </div>
        </header>
    )
}
export default Header