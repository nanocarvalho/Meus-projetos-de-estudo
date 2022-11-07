import styles from './Header.module.css'
const Header = ({setOpenModal, setItemToEdit}) => {
    return (
        <header className={styles.headerContainer}>
            <button 
            className={styles.btnNew}
            onClick={() => {
                setOpenModal(true)
                setItemToEdit()
                }}>Novo item</button>
        </header>
    )
}

export default Header