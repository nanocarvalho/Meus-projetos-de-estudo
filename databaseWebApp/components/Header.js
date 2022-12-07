import styles from './Header.module.css'

const Header = ({setOpenModal, setItemToEdit, setUpdateAction}) => {

    const operations = () => {
        setItemToEdit('')
        setOpenModal(true)
        setUpdateAction(false)
    }
    return (
        <header className={styles.header}>
            <h1 className={styles.headerh1}>Anime/Manga Offline Database</h1>
            <button onClick={()=> operations()}>New</button>
        </header>
    )    
}

export default Header