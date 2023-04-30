import './PageHeader.css'
import Button from '../Button'

const PageHeader = () => {
    return (
        <section className='page-header-container'>
            <div className='button'>Home</div>
            <div className='button'>Cadastrar</div>
            <div className='button'>Listar</div>
        </section>
    )
}
export default PageHeader