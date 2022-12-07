import Header from '../components/Header'
import TableItem from '../components/TableItem'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'
import styles from '../styles/index.module.css'

export default function Home() {
  const [data, setData] = useState([])
  const [itemToEdit, setItemToEdit] = useState()
  const [openModal, setOpenModal] = useState(false)
  const [updateAction, setUpdateAction] = useState(false)

  const addItem = (newItem) => {
    setData([...data, newItem])
  }

  const updateItem = (dataToUpdate) => {
     data.map(item => {
       if(item.id === dataToUpdate.id){
          item.name = dataToUpdate.name
          item.type = dataToUpdate.type
          item.watched = dataToUpdate.watched
          item.finished = dataToUpdate.finished
          setData([...data])
      }
    })
  }

  const deleteItem = (id) => {
    //TODO: Change this to a modal
    if(!confirm('Deseja mesmo deletar a entrada? ')) return
    const updatedData = data.filter(item => item.id !== id)
    setData([...updatedData])
  }

  const setEditItem = (id) => {
    const itemToUpdate = data.filter(item => item.id === id)
    setItemToEdit(itemToUpdate)
    setOpenModal(true)
  }

  const updateLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(data))
  }

  useEffect(()=>{ 
    if(data.length > 0) {
      updateLocalStorage()
    }
   }, [data])

  useEffect(()=>{ 
    const dataOnLocalStorage = localStorage.getItem('data')
    if(dataOnLocalStorage){
      const dataToParse = JSON.parse(localStorage.getItem('data'))
      setData([...dataToParse])
    }
   },[])

  return (
      <>
        <Modal 
        openModal={openModal} 
        setOpenModal={setOpenModal}
        addItem={addItem}
        updateItem={updateItem}
        itemToEdit={itemToEdit}
        updateAction={updateAction}
        setUpdateAction={setUpdateAction}
        />
        <Header
         setOpenModal={setOpenModal}
         setItemToEdit={setItemToEdit}
         setUpdateAction={setUpdateAction}
         />
         <div className={styles.tableDiv}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Watched</th>
                <th>Finished</th>
                <th aria-label="No value"></th>
                <th aria-label="No value"></th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(item => (
                  
                  <TableItem
                  key={item.id}
                  props={item}
                  setEditItem={setEditItem}
                  deleteItem={deleteItem}
                  setUpdateAction={setUpdateAction}
                  />
                ))
              }
            </tbody>
            <caption>A simple LocalStorage database. Made by <a href='https://github.com/nanocarvalho' rel='noopener' target='_blank'>Nano Carvalho</a></caption>
          </table>
         </div>
      </>
  )
}
