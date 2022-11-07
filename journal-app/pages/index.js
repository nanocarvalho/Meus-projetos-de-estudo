import { useState, useEffect } from 'react'
import Layout from '../components/Layout.js'
import Container from '../components/Container.js'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [sections, setSections] = useState([
    {
      name: "Segunda",
      content: ""
    },
    {
      name: "Terça",
      content: ""
    },
    {
      name: "Quarta",
      content: ""
    },
    {
      name: "Quinta",
      content: ""
    },
    {
      name: "Sexta",
      content: ""
    },
    {
      name: "Fim de semana",
      content: ""
    },
    {
      name: "Mês",
      content: ""
    },
  ])

  useEffect(()=>{
    //Salva com ctrl + s
    //Parece ter algum problema com delay, mas isso pode ser só em desenvolvimento, depois do deploy preciso testar
    document.addEventListener('keydown', event => {
      if(event.ctrlKey && event.code === "KeyS") {
        event.preventDefault()
        saveToLocalStorage()
      }
    })
  })

  const handleContentChange = (event) => {
    let newContent = event.target.value
    sections.map(item => {
      if(item.name === event.target.name) {
        item.content = newContent
      }
    })
    setSections([...sections])
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("userData", JSON.stringify(sections))
    alert('Dados Salvos')
  }

  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem("userData")
    const dataToApp = JSON.parse(storedData)
    if(dataToApp !== null) {
      setSections(dataToApp)
      alert('Dados Carregados')
    } else {
      alert('Não há nada para carregar')
    }
    
  }

  const clearFields = () => {
    if(confirm('Você deseja mesmo limpar os campos?')) {
      sections.map(item => {
          item.content = ''
        }
      )
      setSections([...sections])
    }
  }



  return (
    <Layout 
    clearFields={clearFields}
    saveToLocalStorage={saveToLocalStorage}
    loadFromLocalStorage={loadFromLocalStorage}
    >
      <div className={`${styles.paddingAll} ${styles.containers}`}>
        {
          sections.map((item, index) => (
            <Container
            key={index}
            title={item.name}
            text={item.content}
            handleChange={handleContentChange}
            />
          ))
        }
      </div>
    </Layout>
  )
}
