import { useState } from "react"

import '../styles/Display.css'

const Display = ({password}) => {
    const [copyText, setCopyText] = useState('Copy')

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
        setCopyText('Copied')

        setTimeout(()=>{
            setCopyText('Copy')
        }, 2000)
    }

    return (
        <div className="display">
            <input type='text' value={password} readOnly />
            <button onClick={handleCopy}>{copyText}</button>
        </div>
    )
}

export default Display