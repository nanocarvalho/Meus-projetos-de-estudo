import '../styles/Checkbox.css'

const Checkbox = ({checked, name, label, onChange}) => {

    return (
        <div className='checkbox'>
            <label htmlFor={name}>{label}</label>
            <input type="checkbox" name={name} id={name} checked={checked} onChange={onChange}/>
        </div>
    )
}

export default Checkbox