import styles from './TableItem.module.css'

const TableItem = ({ props, setEditItem, deleteItem, setUpdateAction }) => {
    
    const editOperations = () => {
        setEditItem(props.id)
        setUpdateAction(true)
    }

    return (
        <tr className={styles.tableRow}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.type}</td>
            <td>{props.watched}</td>
            <td>{props.finished}</td>
            <td><button className={styles.btnEdit} onClick={() => editOperations()}>Edit</button></td>
            <td><button className={styles.btnDelete} onClick={() => deleteItem(props.id)}>Delete</button></td>
        </tr>
    )
}

export default TableItem