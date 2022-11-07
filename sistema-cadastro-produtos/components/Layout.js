import Head from 'next/head'
import Header from './Header.js'

const Layout = ({ children, setOpenModal, setItemToEdit }) => {
    return (
        <>
        <Head>
            <title>Página inicial</title>
            <meta name="description" content="Um sistema de gestão simples" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header 
        setOpenModal={setOpenModal}
        setItemToEdit={setItemToEdit}
         />
        { children }
        </>
    )
}

export default Layout