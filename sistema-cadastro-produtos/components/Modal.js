import { useEffect, useState } from 'react'
import styles from './Modal.module.css'

const Modal = ({setOpenModal, handleCreateData, updateItemData, open, itemToEdit}) => {

    const [itemData, setItemData] = useState({
        name: "",
        quantity: "",
        price: "",
        id: 0,
    })
    

    const handleSetItemData = event => {
        setItemData({
            ...itemData,
            [event.name]:event.value
        }) 
    }

    
    const changeItemData = () => {
        if(itemToEdit) {
            setItemData(itemToEdit)
        }
    }

    const saveData = event => {
        event.preventDefault()

        if(itemToEdit) {
            updateItemData(itemData)
        } else {
            handleCreateData(itemData)
            setItemData({
                name: "",
                quantity: "",
                price: "",
                id: 0,
            })
        }
    }

    useEffect(()=>{
        changeItemData()
    },[itemToEdit])

 
    return (
        <div className={styles.bgDiv}>
            <form className={open ? styles.openModal : styles.closeModal}>
                <label htmlFor='name'>Nome</label>
                <input 
                name="name" 
                type="text"
                value={itemData.name} 
                onChange={({ target })=> handleSetItemData(target)}
                />
                <label htmlFor='quantity'>Quantidade</label>
                <input 
                name="quantity" 
                type="number"
                value={itemData.quantity}
                onChange={({ target })=> handleSetItemData(target)}
                />
                <label htmlFor='price'>Preço</label>
                <input 
                name="price" 
                type="number" 
                value={itemData.price}
                onChange={({ target })=> handleSetItemData(target)}
                />
                <div className={styles.btnsContainer}>
                    <button className={styles.saveBtn} type='submit' onClick={() => saveData(event)}>Salvar</button>
                    <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default Modal