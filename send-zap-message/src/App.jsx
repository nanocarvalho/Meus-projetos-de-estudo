import { useState } from 'react'
import Form from  './components/Form.jsx'

import heroImg from './assets/hero-image.svg'
import './styles/App.css'


function App() {

  return (
    <div className="app">
      <img src={heroImg} alt="A illustration of person next to a phone" />
      <h1>Envie uma mensagem sem salvar o contato no seu smartphone!</h1>
      <p>Aqui você pode incluir uma mensagem ou apenas o número. Ao clicar no botão você será redirecionado(a) para o aplicativo ou caso esteja no computador para o Whatsapp Web.</p>
      <Form />
      <span>Feito por <a href="https://github.com/nanocarvalho" target='_blank'>Nano Carvalho</a></span>
    </div>
  )
}

export default App
