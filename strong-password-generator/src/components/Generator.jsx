import { customAlphabet } from 'nanoid'
import { useEffect, useState } from 'react'

import '../styles/Generator.css'

const Generator = ({settings, size, setPasswordFinal}) => {
    const [alphabet, setAlphabet] = 
    useState('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()<>,.?/[]-=_+/')

    let finalSize = Number(size)
    let characteres = ''

    useEffect(()=>{updateCharacters()},[settings])
   
    const updateCharacters = () => {
        for(let setting in settings) {
            if(settings[setting] === true) {
                switch(setting) {
                    case 'lowercase':
                        characteres += 'abcdefghijklmnopqrstuvwxyz'
                        break
                    case 'uppercase':
                        characteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                        break
                    case 'numbers':
                        characteres  += '1234567890'
                        break
                    case 'symbols':
                        characteres += '!@#$%^&*()<>,.?/[]-=_+/'
                        break
                }
            }
            setAlphabet(characteres)
        }
        characteres = ''
    }
    
    const randomPassword = () => {
        if(alphabet === '') {
            alert('Selecione pelo menos uma opção de senha!')
            return
        }
        const nanoid = customAlphabet(alphabet, finalSize)
        let generatedPassword = nanoid()
        setPasswordFinal(generatedPassword)
    }

    return (
        <div className='generator'>
            <button onClick={randomPassword}>Generate</button>
        </div>
    )
}

export default Generator