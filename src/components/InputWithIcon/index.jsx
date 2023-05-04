import './InputWithIcon.css'

const InputWithIcon = ({width}) => {
    return (
        <div className='input-container'>
            <img src="src/images/magnifying-glass.png" alt="lupa" className='magnifying-glass' />
            <input
                type='text'
                style={{ width: width }}
            />
        </div>
    )
}

export default InputWithIcon