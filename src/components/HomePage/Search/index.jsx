import { GoLocation } from 'react-icons/go'
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
                            <GoLocation className='location-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search