import { useEffect, useState } from "react"
import Checkbox from "./Checkbox.jsx"

import '../styles/Options.css'

const Options = ({settings, size}) => {
    const [passwordSize, setPasswordSize] = useState(4)

    //For easy check later
    const [options, setOptions] = useState({
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true
    })

    //To create all checkboxes
    const [checkboxes, setCheckboxes] = useState([
        {
            id: 'lowercase',
            name: 'lowercase',
            label: 'Lowercase',
            isChecked: true

        },
        {
            id: 'uppercase',
            name: 'uppercase',
            label: 'Uppercase',
            isChecked: true

        },
        {
            id: 'numbers',
            name: 'numbers',
            label: 'Numbers',
            isChecked: true

        },
        {
            id: 'symbols',
            name: 'symbols',
            label: 'Symbols',
            isChecked: true
            
        },
    ])

    //when loaded send to the parent all the options and the suze
    useEffect(()=>{
        settings(options)
        size(passwordSize)
    }, [])

    //The same when any options or the size is changed
    useEffect(()=>{
        settings(options)
        size(passwordSize)
    }, [options, passwordSize])

    //Now this works as expected and updates the state of the checkbox
    const onChangeCheckbox = event => {
        //Find the target, and change the checked
        checkboxes.map(checkbox => {
            if(checkbox.name === event.target.name) {
                checkbox.isChecked = event.target.checked
            }
        })

        //update the options for later use
        setOptions({
            ...options,
            [event.target.id]: event.target.checked
        })
    }

    return (
        <section className="options">
            <h2>Customize your password</h2>
            <div>
                {
                    checkboxes.map(checkbox => (
                        <Checkbox
                        key={checkbox.id}
                        name={checkbox.name}
                        label={checkbox.label}
                        id={checkbox.id}
                        checked={checkbox.isChecked}
                        onChange={onChangeCheckbox}
                         />
                    ))
                }

            </div>
                <input 
                onChange={({target})=>{setPasswordSize(target.value)}}
                id="range" 
                type="range"
                value={passwordSize}
                min={4}
                max={36}
                step={1} />
                <span>{passwordSize}</span>
        </section>
    )
}

export default Options