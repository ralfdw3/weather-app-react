import './Search.css'
import InputWithIcon from '../../InputWithIcon'

const Search = () => {

    return (
        <div className='search'>
            <div className='search-content'>
                <span>Pesquise a cidade</span>
                <div className='second-row'>
                    <InputWithIcon />
                    <div className='circle'>
                        <div>
                            <img src="src/images/location.png" alt="localizacao" className='location-image'/>
                            <img src="src/images/point.png" className='point-image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search