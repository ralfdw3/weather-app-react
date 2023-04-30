import './PageHeader.css'
import Button from '../Button'

const PageHeader = () => {
    return (
        <div className='page-header-container'>
            <Button>Home</Button>
            <Button>Cadastrar</Button>
            <Button>Listar</Button>
        </div>
    )
}
export default PageHeader