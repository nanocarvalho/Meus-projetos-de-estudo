import styles from './ListItem.module.css'
const ListItem = ({ editItem, deleteItem, data}) => {        
    return (
        <div className={styles.cardContainer}>
            <p className={styles.name}>{data.name}</p>
            <p className={styles.quantity}>{data.quantity}</p>
            <p className={styles.price}>R${data.price}</p>
            <div className={styles.btnsContainer}>
                <button
                className={`${styles.btns}`}
                onClick={() => editItem(data.id) }>Editar</button>
                <button
                className={`${styles.btns} ${styles.btnDelete}`}
                onClick={() => deleteItem(data.id) }>Deletar</button>

            </div>
        </div>
    )
}

export default ListItem