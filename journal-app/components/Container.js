import styles from './Container.module.css'

const Container = ({ title, text, handleChange }) => {
    return (
        <section className={styles.containerSection}>
            <label htmlFor={title}>
                <p className={styles.containerP}>{title}</p>
            </label>
            <textarea 
            className={styles.textarea}
            rows="10" 
            cols="25" 
            name={title} 
            value={text} 
            onChange={handleChange}/>
        </section>
    )

}

export default Container