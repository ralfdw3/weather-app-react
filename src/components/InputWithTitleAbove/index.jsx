import './InputWithTitleAbove.css'

const InputWithTitleAbove = ({ title, width }) => {
    return (
        <div className={`input-title-container`}>
            <span>{title}</span>
            <div>
                <input
                    className='input-title-above'
                    style={{ width: width }}
                    type='text'
                />
            </div>
        </div>
    )
}

export default InputWithTitleAbove