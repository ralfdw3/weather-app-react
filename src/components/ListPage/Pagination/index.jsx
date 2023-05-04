import './Pagination.css'

const Pagination = ({ currentPage, totalPages }) => {
    return (
        <div className="list-pagination">
            <span>{'< '}</span>
            <span>Página {currentPage} de {totalPages}</span>
            <span>{' >'}</span>
        </div>
    );
}

export default Pagination;

