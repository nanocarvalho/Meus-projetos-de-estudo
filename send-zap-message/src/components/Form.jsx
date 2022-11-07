import { useState } from 'react'

import phoneIcon from '../assets/call.svg'
import messageIcon from '../assets/chat.svg'
import '../styles/Form.css'

const Form = () => {
    const [form, setForm] = useState({
        phone: '',
        message: ''
    })

    const handleSubmit = event => {
        event.preventDefault()
        const newNumber = `55${form.phone}`
        const newMessage = form.message.replace(/( )+/g, '%20')
        window.location=`https://wa.me/${newNumber}?text=${newMessage}`
    }

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            {/* Number input */}
            <div className="form-phone">
                <label htmlFor="phone" aria-label="Insira seu número">
                    <img src={phoneIcon} alt="icone de telefone" />
                </label>
                <input 
                type="tel" 
                name="phone" 
                id="phone"  
                maxLength="11"
                minLength="11" 
                onChange={handleChange}
                required
                />
            </div>
            {/* Message input */}
            <div className="form-message">
                <label htmlFor="message" aria-label="Insira sua mensagem">
                    <img src={messageIcon} alt="icone de mensagem" />
                </label>
                <input 
                type="text" 
                name="message" 
                id="message" 
                onChange={handleChange}/>
            </div>
            <button type='submit'>Enviar mensagem</button>
        </form>
    )
}

export default Form