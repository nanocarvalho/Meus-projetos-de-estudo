import Layout from '../components/Layout.js'
import ListItem from '../components/ListItem.js'
import Modal from '../components/Modal.js'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState([])
  const [itemToEdit, setItemToEdit] = useState('')

  const handleCreateData = newData => {
    newData.id = Math.ceil(Math.random() * 10000)
    data.length <= 0 ? setData([newData]) : setData([...data, newData])
    setOpenModal(false)
  }

  const handleEditData = itemId => {
    data.map(listItem => {
      if(listItem.id === itemId) {
        setItemToEdit(listItem)
        setOpenModal(true)
      }
    })
  }

  const updateItemData = newItemData => {
    setItemToEdit()
    data.map(item => {
      if(item.id === newItemData.id) {
        item.name = newItemData.name
        item.quantity = newItemData.quantity
        item.price = newItemData.price
      }
    })
    setData([...data])
    setOpenModal(false)
  }

  const handleDeleteItem = itemId => {
    if(confirm("Deseja deletar o item?")) {
      const updatedData = data.filter(item => item.id !== itemId)
      setData([...updatedData])
    }
  }

  useEffect(() => {
    //
    if(data.length > 0) {
      localStorage.setItem("data", JSON.stringify(data))
    }
  }, [data])
  
  useEffect(() => {
	  const userData = localStorage.getItem("data")
	  if(userData) {
		  const dataToParse = JSON.parse(userData)
	  setData(dataToParse)
      }
	  }, [])
  

  return (
    <Layout setOpenModal={setOpenModal} setItemToEdit={setItemToEdit}>
      {
        openModal  ? 
        <Modal 
        open={openModal} 
        setOpenModal={setOpenModal}
        handleCreateData={handleCreateData}
        updateItemData={updateItemData}
        itemToEdit={itemToEdit}
        /> 
        :
        <></>
      }
      <section className={styles.sectionContainer}>
        {
         data.length > 0 ? data.map(item => (
            <ListItem
            key={item.id}
            editItem={handleEditData}
            deleteItem={handleDeleteItem}
            data={item}
             />
          ))
          : 
          <h2>Nenhum item encontrado</h2>
        }
      </section>
    </Layout>
  )
}