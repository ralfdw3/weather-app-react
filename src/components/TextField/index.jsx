import './TextField.css'

const TextField = (props) => {
    return (
        <input
            className="text-field"
            type='text'
            placeholder={props.placeholder}
        />
    )
}

export default TextField