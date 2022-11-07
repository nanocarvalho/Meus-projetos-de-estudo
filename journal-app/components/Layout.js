import Head from "next/head"
import styles from './Layout.module.css'

const Layout = ({ children, clearFields, saveToLocalStorage, loadFromLocalStorage }) => {
    return(
    <>
        <Head>
            <title>Simple Journal App</title>
            <meta name="description" content="A simple to use Journal app" />
        </Head>
        <header className={styles.header}>
            <div>
                <button
                className={`${styles.btn}`} 
                onClick={saveToLocalStorage}>Save</button>
                <button
                className={`${styles.btn} ${styles.marginLeft}`} 
                onClick={loadFromLocalStorage}>Load</button>
            </div>
            <div>
                <button
                className={`${styles.btn} ${styles.btnDelete}`} 
                onClick={clearFields}>Clear</button>
            </div>
        </header>
        { children }

        <footer>
            <p className={styles.footerP}>Feito por <a
            className={styles.footerA}
            href="https://github.com/nanocarvalho"
            target='_blank'
            rel="noreferrer"
            >Nano Carvalho.</a></p>
        </footer>
    </>
    )
}

export default Layout