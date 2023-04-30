import './InputWithIcon.css'

const InputWithIcon = () => {
    return (
        <div className='input-container'>
            <img src="src/images/magnifying-glass.png" alt="lupa" className='magnifying-glass' />
            <input type='text' />
        </div>
    )
}

export default InputWithIcon