import { useState, useEffect } from "react"
import styles from './Modal.module.css'

const Modal = ({itemToEdit, openModal, setOpenModal, addItem, updateItem, updateAction, setUpdateAction}) => {
    const [inputData, setInputData] = useState({
            id: Math.ceil(Math.random() * 1000),
            name: '',
            type: 'Anime',
            watched: 0,
            finished: 'Yes'
    })

    const newItem = ()  => {
        setInputData({...inputData,
            id: Math.ceil(Math.random() * 1000)
        })
        addItem(inputData)
        closeModal()
    }

    const updateInputField = e => {
        setInputData({...inputData,
            [e.name]:e.value
        })
    }

    const changeInputData = () => {
        if(itemToEdit){
            setInputData(...itemToEdit)
        }
    }

    const updateDataItem = () => {
        updateItem(inputData)
        closeModal()
    }

    const closeModal = () => {
        setOpenModal(false)
        setUpdateAction(false)
        setInputData({
            id: Math.ceil(Math.random() * 1000),
            name: '',
            type: 'Anime',
            watched: 0,
            finished: 'Yes'
        })
    }

    useEffect(()=>{
        changeInputData()
    },[itemToEdit])
    

    return (
        <div className={openModal ? styles.bgModal : styles.bgModalClose}>
            <form onSubmit={(e) => {e.preventDefault()}} className={openModal ? styles.modalOpen : styles.modalClose}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={inputData.name} onChange={({target}) => updateInputField(target)}/>
                <label htmlFor="type" >Type</label>
                <select id="type" name="type" onChange={({target}) => updateInputField(target)}>
                    <option>Anime</option>
                    <option>Manga</option>
                </select>
                <label htmlFor="watched">Watched</label>
                <input id="watched" name="watched" type="number" value={inputData.watched} onChange={({target}) => updateInputField(target)}/> 
                <label htmlFor="finished" >Finished</label>
                <select id="finished" name="finished" onChange={({target}) => updateInputField(target)}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <div className={styles.btns}>
                    <button type="submit" onClick={()=> newItem()} disabled={updateAction ? true : false}>Add</button>
                    <button onClick={()=> updateDataItem()} disabled={updateAction ? false : true}>Save</button>
                    <button onClick={() => closeModal()}>Close</button>        
                </div>
            </form>
        </div>
    )

}

export default Modal