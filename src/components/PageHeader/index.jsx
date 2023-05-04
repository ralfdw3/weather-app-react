import './PageHeader.css'

const PageHeader = () => {
    return (
        <section className='page-header-container'>
            <div className='page-header-info'>
                <div className='header-button'>Home</div>
                <div className='header-button'>Cadastrar</div>
                <div className='header-button'>Listar</div>
            </div>
        </section>
    )
}
export default PageHeader